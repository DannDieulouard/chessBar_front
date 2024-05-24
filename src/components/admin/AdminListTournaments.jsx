import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useVerifyToken } from "../../utils/authGuard";
import Sidebar from "./AdminSidebar";
import AdminMiniHeader from "./AdminMiniHeader";
import './css/adminDashboard.css';

const AdminListTournaments = () => {
  const [tournaments, setTournaments] = useState([]);
  const navigate = useNavigate();
  const [needsRefresh, setNeedRefresh] = useState(false);

  const decodedToken = useVerifyToken();

  useEffect(() => {
    fetch("http://localhost:5000/api/tournaments", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
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
  return (
    <>
      <main>
        <h2>Les tournois</h2>
        <AdminMiniHeader />
        <div className="flex_dashboard">
        <aside><Sidebar /></aside>
        <section className="flex_list">
          {tournaments.map((tournament) => {
            return (
              <article key={tournament.id}>
                {decodedToken.roleId === 1 && (
                  <section>
                  <h4>{tournament.name}</h4>
                  <button class="delete" onClick={(event) => handleDeleteTournament(event, tournament.id)}>Supprimer</button>
                  <button class="modify"><Link to={`/admin/tournaments/update/${tournament.id}`}>Modifier</Link></button>
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
export default AdminListTournaments;