import Sidebar from "./AdminSidebar";
import { useNavigate } from "react-router-dom";

const AdminCreateRankings = () => {
    const navigate = useNavigate();

    const handleCreateRanking = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
    
        const rankingData = {
          name: name,
        };
    
        const rankingDataJson = JSON.stringify(rankingData);

    fetch("http://localhost:5000/api/rankings", {
      method: "POST",
      body: rankingDataJson,
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        navigate("/admin/rankings")
      });
  };
    return (
        <>
            <h2>Créer un classement</h2>
            <Sidebar />
            <div className="container"> 
            <div className="signup-form">
          <form onSubmit={handleCreateRanking}>
            <div className="input-group">
              <label>
                Nom
                <input type="text" name="name" />
              </label>
            </div>
            <button className="Create" type="submit">Créer</button>
          </form>
          </div>
          </div>
        </>
    )
}

export default AdminCreateRankings;