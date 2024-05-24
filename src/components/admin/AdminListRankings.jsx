import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useVerifyToken } from "../../utils/authGuard";
import Sidebar from "./AdminSidebar";
import AdminMiniHeader from "./AdminMiniHeader";
import './css/adminDashboard.css';

const AdminListRankings = () => {
  const [rankings, setRankings] = useState([]);
  const navigate = useNavigate();
  const [needsRefresh, setNeedRefresh] = useState(false);

  const decodedToken = useVerifyToken();

  useEffect(() => {
    fetch("http://localhost:5000/api/rankings", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((rankingsData) => {
        setRankings(rankingsData.data);
      });
  }, [needsRefresh]);


  const handleDeleteRanking = (event, rankingId) => {
    fetch("http://localhost:5000/api/rankings/" + rankingId, {
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
        <h2>Les classements</h2>
        <AdminMiniHeader />
        <div className="flex_dashboard">
        <aside><Sidebar /></aside>
        <section className="flex_list">
          {rankings.map((ranking) => {
            return (
              <article key={ranking.id}>
                <h2>{ranking.name}</h2>
                {decodedToken.roleId === 1 && (
                  <section>
                    <button onClick={(event) => handleDeleteRanking(event, ranking.id)}>Supprimer</button>
                    <Link to={`/admin/rankings/update/${ranking.id}`}>Modifier</Link>
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
export default AdminListRankings;