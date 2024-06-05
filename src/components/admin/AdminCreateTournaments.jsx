import Sidebar from "./AdminSidebar";
import { useNavigate } from "react-router-dom";

const AdminCreateTournaments = () => {
    const navigate = useNavigate();

    const handleCreateTournament = (event) => {
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

    
    fetch("http://localhost:5000/api/tournaments", {
      method: "POST",
      body: tournamentDataJson,
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        navigate("/admin/tournaments")
      });
  };




    return (
        <>
            <h2>Créer un tournoi</h2>
            <Sidebar />
            <div className="container"> 
            <div className="signup-form">
          <form onSubmit={handleCreateTournament}>
            <div className="input-group">
              <label>
                Nom
                <input type="text" name="name" />
              </label>
            </div>
            <div className="input-group">
              <label>
                Jour de jeu
                <input type="text" name="game_day" />
              </label>
            </div>
            <div className="input-group">
              <label>
                Heure de jeu
                <input type="text" name="game_time"/>
              </label>
              </div>
            <button className="Create" type="submit">Créer</button>
          </form>
          </div>
          </div>
        </>
    )
}

export default AdminCreateTournaments;