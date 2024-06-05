import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useVerifyToken } from "../../utils/authGuard";
import Sidebar from "./AdminSidebar";
import "../admin/css/adminUpdate.css";

const UpdateBar = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [bar, setBar] = useState(null);

  useVerifyToken();

  useEffect(() => {
    fetch("http://localhost:5000/api/bars/" + id, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((barData) => {
        setBar(barData.data);
      });
  }, []);

  const handleUpdateBar = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const city = event.target.city.value;
    const address = event.target.address.value;
    const imageUrl = event.target.imageUrl.value;
    const website = event.target.website.value;
    const phone = event.target.phone.value;
    const game_day = event.target.game_day.value;
    const game_time = event.target.game_time.value;

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

    fetch("http://localhost:5000/api/bars/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: barDataJson,
      credentials: "include",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        navigate("/admin/bars");
      });
  };

  return (
    <>
      <h2>Modifier le bar</h2>
      <Sidebar />
      {bar && (
        <div className="container"> 
        <div className="update-form">
        <form onSubmit={handleUpdateBar}>
          <div className="input-group">
            <label>
              Nom
              <input type="text" name="name" defaultValue={bar.name} />
            </label>
          </div>
          <div className="input-group">
          <label>
              Ville
              <input type="text" name="city" defaultValue={bar.city} />
          </label>
          </div>
          <div className="input-group">
          <label>
              Adresse
              <input type="text" name="address" defaultValue={bar.address} />
          </label>
          </div>
          <div className="input-group">
          <label>
              imageUrl
              <input type="text" name="imageUrl" defaultValue={bar.imageUrl} />
          </label>
          </div>
          <div className="input-group">
          <label>
              Site internet
              <input type="text" name="website" defaultValue={bar.website} />
          </label>
          </div>
          <div className="input-group">
          <label>
              Téléphone
              <input type="text" name="phone" defaultValue={bar.phone} />
          </label>
          </div>
          <div className="input-group">
          <label>
              Jour de jeu
              <input type="text" name="game_day" defaultValue={bar.game_day} />
          </label>
          </div>
          <div className="input-group">
          <label>
              Heure de jeu
              <input type="text" name="game_time" defaultValue={bar.game_time} />
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

export default UpdateBar;