import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useVerifyToken } from "../../utils/authGuard";
import Sidebar from "./AdminSidebar";
import AdminMiniHeader from "./AdminMiniHeader";
import './css/adminDashboard.css';

const AdminListBars = () => {
  const [bars, setBars] = useState([]);
  const navigate = useNavigate();
  const [needsRefresh, setNeedRefresh] = useState(false);

  const decodedToken = useVerifyToken();

  useEffect(() => {
    fetch("http://localhost:5000/api/bars", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((barsData) => {
        setBars(barsData.data);
      });
  }, [needsRefresh]);


  const handleDeleteBar = (event, barId) => {
    fetch("http://localhost:5000/api/bars/" + barId, {
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
        <h2>Les bars</h2>
        <AdminMiniHeader />
        <div className="flex_dashboard">
        <aside><Sidebar /></aside>
        <section className="flex_list">
          {bars.map((bar) => {
            return (
              <article key={bar.id}>
                {decodedToken.roleId === 1 && (
                  <section>
                    <h4>{bar.name}</h4>
                    <button class="delete" onClick={(event) => handleDeleteBar(event, bar.id)}>Supprimer</button>
                    <button class="modify"><Link to={`/admin/bars/update/${bar.id}`}>Modifier</Link></button>
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
export default AdminListBars;