import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useVerifyToken } from "../../utils/authGuard";

const UpdateTournament = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [tournament, setTournament] = useState(null);

  useVerifyToken();

  useEffect(() => {
    fetch("http://localhost:5000/api/tournaments/" + id, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((tournamentData) => {
        setTournament(tournamentData.data);
      });
  }, []);

  const handleUpdateTournament = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const game_day = event.target.game_day.value;
    const game_time = event.target.game_time.value;

    const tournamentData = {
      name: name,
      game_day: game_day,
      game_time: game_time
    };

    const tournamentDataJson = JSON.stringify(tournamentData);

    fetch("http://localhost:5000/api/tournaments/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: tournamentDataJson,
      credentials: "include",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        navigate("/admin/tournaments");
      });
  };

  return (
    <>
      <h2>Modifier le tournoi</h2>

      {tournament && (
        <form onSubmit={handleUpdateTournament}>
          <div>
            <label>
              Nom
              <input type="text" name="name" defaultValue={tournament.name} />
            </label>
          </div>
          <div>
          <label>
              Jour de jeu
              <input type="text" name="game_day" defaultValue={tournament.game_day} />
          </label>
          </div>
          <div>
          <label>
              Heure de jeu
              <input type="text" name="game_time" defaultValue={tournament.game_time} />
          </label>
          </div>
          <input type="submit" value="Mettre à jour" />
        </form>
      )}
    </>
  );
};

export default UpdateTournament;