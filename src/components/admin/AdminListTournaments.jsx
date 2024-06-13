// AdminListTournaments.jsx
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useVerifyToken } from "../../utils/authGuard";
import Sidebar from "./AdminSidebar";
import AdminMiniHeader from "./AdminMiniHeader";
import './css/adminDashboard.css';

const AdminListTournaments = () => {
  const [tournaments, setTournaments] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [needsRefresh, setNeedRefresh] = useState(false);

  const decodedToken = useVerifyToken();

  useEffect(() => {
    fetch("http://localhost:5000/api/tournaments", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((tournamentsData) => {
        setTournaments(tournamentsData.data);
      });
  }, [needsRefresh]);

  const handleDeleteTournament = (event, tournamentId) => {
    fetch("http://localhost:5000/api/tournaments/" + tournamentId, {
      method: "DELETE",
      credentials: "include",
    }).then((response) => {
      if (response.status === 401) {
        navigate("/login");
      }
      setNeedRefresh(!needsRefresh);
    });
  };

  const filteredTournaments = tournaments.filter(tournament =>
    tournament.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {decodedToken.roleId === 1 || decodedToken.roleId === 2 ? (
        <main>
          <h2>Les tournois</h2>
          <AdminMiniHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <div className="flex_dashboard">
            <aside><Sidebar /></aside>
            <section className="flex_list">
              {filteredTournaments.length > 0 ? (
                filteredTournaments.map((tournament) => (
                  <article key={tournament.id}>
                    <section>
                      <h4>{tournament.name}</h4>
                      <button className="delete" onClick={(event) => handleDeleteTournament(event, tournament.id)}>Supprimer</button>
                      <button className="modify"><Link to={`/admin/tournaments/update/${tournament.id}`}>Modifier</Link></button>
                    </section>
                  </article>
                ))
              ) : (
                <p>Aucun tournoi trouvé.</p>
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

export default AdminListTournaments;
