import { useNavigate } from "react-router-dom";
import Sidebar from "./AdminSidebar";

const CreateBar = () => {

  const navigate = useNavigate();

    const handleCreateBar = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const address = event.target.address.value;
        const city = event.target.city.value;
        const website = event.target.website.value;
        const phone = event.target.phone.value;
        const game_day = event.target.game_day.value;
        const game_time = event.target.game_time.value;
        const imageUrl = event.target.imageUrl.value;
    
        const barData = {
          name: name,
          city: city,
          address: address,
          imageUrl: imageUrl,
          website: website,
          phone: phone,
          game_day: game_day,
          game_time: game_time
        };
    
        const barDataJson = JSON.stringify(barData);

    
    fetch("http://localhost:5000/api/bars", {
      method: "POST",
      body: barDataJson,
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        navigate("/admin/bars")
      });
  };
    
      return (
        <>
          <h2>Créer un bar</h2>
            <Sidebar />
            <div className="container"> 
      <div className="signup-form">
          <form onSubmit={handleCreateBar}>
            <div className="input-group">
              <label>
                Nom
                <input type="text" name="name" />
              </label>
            </div>
            <div className="input-group">
              <label>
                Adresse
                <input type="text" name="address" />
              </label>
            </div>
            <div className="input-group">
              <label>
                Ville
                <input type="text" name="city" />
              </label>
            </div>
            <div className="input-group">
              <label>
                Site internet
                <input type="text" name="website" />
              </label>
            </div>
            <div className="input-group">
              <label>
                Numéro de téléphone
                <input type="number" name="phone"/>
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
              <div className="input-group">
              <label>
                imageUrl
                <input type="text" name="imageUrl" />
              </label>
            </div>
            <div>
            </div>
            <button className="Create" type="submit">Créer</button>
          </form>
          </div>
          </div>
        </>
      );
    };
export default CreateBar;