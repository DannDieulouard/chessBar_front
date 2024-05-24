import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useVerifyToken } from "../../utils/authGuard";

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

      {ranking && (
        <form onSubmit={handleUpdateRanking}>
          <div>
            <label>
              Nom
              <input type="text" name="name" defaultValue={ranking.name} />
            </label>
          </div>
          <input type="submit" value="Mettre à jour" />
        </form>
      )}
    </>
  );
};

export default UpdateRanking;