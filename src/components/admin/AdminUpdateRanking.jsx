import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useVerifyToken } from "../../utils/authGuard";
import Sidebar from "./AdminSidebar";
import "../admin/css/adminUpdate.css";

const UpdateRanking = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [ranking, setRanking] = useState(null);

  useVerifyToken();

  useEffect(() => {
    fetch("http://localhost:5000/api/rankings/" + id, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((rankingData) => {
        setRanking(rankingData.data);
      });
  }, []);

  const handleUpdateRanking = (event) => {
    event.preventDefault();

    const name = event.target.name.value;

    const rankingData = {
      name: name,
    };

    const rankingDataJson = JSON.stringify(rankingData);

    fetch("http://localhost:5000/api/rankings/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: rankingDataJson,
      credentials: "include",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        navigate("/admin/rankings");
      });
  };

  return (
    <>
      <h2>Modifier le classement</h2>
      <Sidebar />
      {ranking && (
        <div className="container"> 
        <div className="update-form">
        <form onSubmit={handleUpdateRanking}>
          <div className="input-group">
            <label>
              Nom
              <input type="text" name="name" defaultValue={ranking.name} />
            </label>
          </div>
          <button className="Update" type="submit">Mettre à jour</button>
        </form>
        </div>
        </div>
      )}
    </>
  );
};

export default UpdateRanking;