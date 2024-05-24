import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useVerifyToken } from "../../utils/authGuard";
import Sidebar from "./AdminSidebar";
import AdminMiniHeader from "./AdminMiniHeader";
import './css/adminDashboard.css';

const AdminListUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [needsRefresh, setNeedRefresh] = useState(false);

  const decodedToken = useVerifyToken();

  useEffect(() => {
    fetch("http://localhost:5000/api/users", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
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
  return (
    <>
     <main>
        <h2>Les utilisateurs</h2>
        <AdminMiniHeader />
        <div className="flex_dashboard">
        <aside><Sidebar /></aside>
        <section className="flex_list">
          {users.map((user) => {
            return (
              <article key={user.id}>
                {decodedToken.roleId === 1 && (
                  <section>
                  <h4>{user.username}</h4>
                  <button class="delete" onClick={(event) => handleDeleteUser(event, user.id)}>Supprimer</button>
                  <button class="modify"><Link to={`/admin/users/update/${user.id}`}>Modifier</Link></button>
                </section>
                )}
              </article>
            );
          })}
        </section>
        </div>
      </main>
    </>
  );
};
export default AdminListUsers;