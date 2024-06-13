// AdminDashboard.jsx
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useVerifyToken } from "../../utils/authGuard";
import Sidebar from "./AdminSidebar";
import AdminMiniHeader from "./AdminMiniHeader";
import './css/adminDashboard.css';

const AdminDashboard = () => {
  const [bars, setBars] = useState([]);
  const [users, setUsers] = useState([]);
  const [tournaments, setTournaments] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [needsRefresh, setNeedRefresh] = useState(false);

  const decodedToken = useVerifyToken();

  useEffect(() => {
    fetch("http://localhost:5000/api/bars", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((barsData) => {
        setBars(barsData.data);
      });

    fetch("http://localhost:5000/api/users", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((usersData) => {
        setUsers(usersData.data);
      });

    fetch("http://localhost:5000/api/tournaments", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((tournamentsData) => {
        setTournaments(tournamentsData.data);
      });
  }, [needsRefresh]);

  const handleDelete = (event, type, id) => {
    fetch(`http://localhost:5000/api/${type}/${id}`, {
      method: "DELETE",
      credentials: "include",
    }).then((response) => {
      if (response.status === 401) {
        navigate("/login");
      }
      setNeedRefresh(!needsRefresh);
    });
  };

  const filteredBars = bars.filter(bar =>
    bar.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTournaments = tournaments.filter(tournament =>
    tournament.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {decodedToken.roleId === 1 || decodedToken.roleId === 2 ? (
        <main>
          <h2>Admin Dashboard</h2>
          <AdminMiniHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <div className="flex_dashboard">
            <aside><Sidebar /></aside>
            <section className="flex_list">
              {searchQuery && (
                <>
                  {filteredBars.length > 0 && (
                    <>
                      {filteredBars.map((bar) => (
                        <article key={bar.id}>
                          <section>
                            <h4>{bar.name}</h4>
                            <button className="delete" onClick={(event) => handleDelete(event, 'bars', bar.id)}>Supprimer</button>
                            <button className="modify"><Link to={`/admin/bars/update/${bar.id}`}>Modifier</Link></button>
                          </section>
                        </article>
                      ))}
                    </>
                  )}

                  {filteredUsers.length > 0 && (
                    <>
                      {filteredUsers.map((user) => (
                        <article key={user.id}>
                          <section>
                            <h4>{user.username}</h4>
                            <button className="delete" onClick={(event) => handleDelete(event, 'users', user.id)}>Supprimer</button>
                            <button className="modify"><Link to={`/admin/users/update/${user.id}`}>Modifier</Link></button>
                          </section>
                        </article>
                      ))}
                    </>
                  )}

                  {filteredTournaments.length > 0 && (
                    <>
                      {filteredTournaments.map((tournament) => (
                        <article key={tournament.id}>
                          <section>
                            <h4>{tournament.name}</h4>
                            <button className="delete" onClick={(event) => handleDelete(event, 'tournaments', tournament.id)}>Supprimer</button>
                            <button className="modify"><Link to={`/admin/tournaments/update/${tournament.id}`}>Modifier</Link></button>
                          </section>
                        </article>
                      ))}
                    </>
                  )}
                </>
              )}
            </section>
          </div>
        </main>
      ) : (
        useEffect(() => {
          navigate("/");
        }, [])
      )}
    </>
  );
};

export default AdminDashboard;
