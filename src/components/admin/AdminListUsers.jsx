import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useVerifyToken } from "../../utils/authGuard";
import Sidebar from "./AdminSidebar";
import AdminMiniHeader from "./AdminMiniHeader";
import './css/adminDashboard.css';

const AdminListUsers = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [needsRefresh, setNeedRefresh] = useState(false);

  const decodedToken = useVerifyToken();

  useEffect(() => {
    fetch("http://localhost:5000/api/users", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((usersData) => {
        setUsers(usersData.data);
      });
  }, [needsRefresh]);

  const handleDeleteUser = (event, userId) => {
    fetch("http://localhost:5000/api/users/" + userId, {
      method: "DELETE",
      credentials: "include",
    }).then((response) => {
      if (response.status === 401) {
        navigate("/login");
      }
      setNeedRefresh(!needsRefresh);
    });
  };

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {decodedToken.roleId === 1 || decodedToken.roleId === 2 ? (
        <main>
          <h2>Les utilisateurs</h2>
          <AdminMiniHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <div className="flex_dashboard">
            <aside><Sidebar /></aside>
            <section className="flex_list">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <article key={user.id}>
                    <section>
                      <h4>{user.username}</h4>
                      <button className="delete" onClick={(event) => handleDeleteUser(event, user.id)}>Supprimer</button>
                      <button className="modify"><Link to={`/admin/users/update/${user.id}`}>Modifier</Link></button>
                    </section>
                  </article>
                ))
              ) : (
                <p>Aucun utilisateur trouvé.</p>
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

export default AdminListUsers;
  
