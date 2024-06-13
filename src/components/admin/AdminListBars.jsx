import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
      .then((response) => response.json())
      .then((barsData) => setBars(barsData.data));
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
      {decodedToken.roleId === 1 || decodedToken.roleId === 2 ? (
        <main className="admin-main">
          <h2>Les bars</h2>
          <AdminMiniHeader />
          <div className="flex_dashboard">
            <aside className="sidebar-container"><Sidebar /></aside>
            <section className="flex_list">
              {bars.map((bar) => (
                <article key={bar.id}>
                  <section>
                    <h4>{bar.name}</h4>
                    <button className="delete" onClick={(event) => handleDeleteBar(event, bar.id)}>Supprimer</button>
                    <button className="modify"><Link to={`/admin/bars/update/${bar.id}`}>Modifier</Link></button>
                  </section>
                </article>
              ))}
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

export default AdminListBars;
