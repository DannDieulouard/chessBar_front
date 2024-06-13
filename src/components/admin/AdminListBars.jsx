// AdminListBars.jsx
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useVerifyToken } from "../../utils/authGuard";
import Sidebar from "./AdminSidebar";
import AdminMiniHeader from "./AdminMiniHeader";
import './css/adminDashboard.css';

const AdminListBars = () => {
  const [bars, setBars] = useState([]);
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

  const filteredBars = bars.filter(bar =>
    bar.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {decodedToken.roleId === 1 || decodedToken.roleId === 2 ? (
        <main>
          <h2>Les bars</h2>
          <AdminMiniHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <div className="flex_dashboard">
            <aside><Sidebar /></aside>
            <section className="flex_list">
              {filteredBars.length > 0 ? (
                filteredBars.map((bar) => (
                  <article key={bar.id}>
                    <section>
                      <h4>{bar.name}</h4>
                      <button className="delete" onClick={(event) => handleDeleteBar(event, bar.id)}>Supprimer</button>
                      <button className="modify"><Link to={`/admin/bars/update/${bar.id}`}>Modifier</Link></button>
                    </section>
                  </article>
                ))
              ) : (
                <p>Aucun bar trouvé.</p>
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

export default AdminListBars;

