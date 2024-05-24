import { useVerifyToken } from "../../utils/authGuard";
import { useNavigate } from "react-router-dom";
import Sidebar from "./AdminSidebar";

const CreateBar = () => {

  const navigate = useNavigate();
  useVerifyToken();

    const handleCreateBar = (event) => {
        event.preventDefault();

    // je récupère tous les champs d'adresse, je créé un objet avec
    // et je le transforme en json (parce que le back stocke l'adresse en json)
    const address = {
      number: event.target.number.value,
      street: event.target.street.value,
      postCode: event.target.postCode.value,
      city: event.target.city.value,
        };
    
    // je veux envoyer des données classiques + un fichier, donc je passe
    // par un FormData plutôt qu'un envoie en JSON classique
    const formData = new FormData();

    // j'ajoute dans le form data toutes les données, y compris l'image
    formData.append("name", event.target.name.value);
    formData.append("city", event.target.city.value);
    formData.append("address", JSON.stringify(address));
    formData.append("website", event.target.website.value);
    formData.append("phone", event.target.phone.value);
    formData.append("game_day", event.target.game_day.value);
    formData.append("game_time", event.target.game_time.value);
    formData.append("image", event.target.image.files[0]);

    // je poste mon formData, en ne specifiant pas qu'on envoie
    // du json car on envoie un Form Data
    
    fetch("http://localhost:5000/api/bars/withImg", {
      method: "POST",
      body: formData,
      credentials: "include",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Bar créé", data);
      });
  };
    
      return (
        <>
          <h2>Créer un bar</h2>
            <Sidebar />
    
          <form onSubmit={handleCreateBar}>
            <div>
              <label>
                Nom
                <input type="text" name="name" />
              </label>
            </div>
            <div>
            </div>
            <div>
              <label>
                Numéro de rue
                <input type="number" name="number" />
              </label>
            </div>
            <div>
              <label>
                Rue
                <input type="text" name="street" />
              </label>
            </div>
            <div>
              <label>
                Code postal
                <input type="text" name="postCode" />
              </label>
            </div>
            <div>
              <label>
                Ville
                <input type="text" name="city" />
              </label>
            </div>
            <div>
              <label>
                Site internet
                <input type="text" name="website" />
              </label>
            </div>
            <div>
              <label>
                Numéro de téléphone
                <input type="number" name="phone"/>
              </label>
            </div>
            <div>
              <label>
                Jour de jeu
                <input type="text" name="game_day" />
              </label>
            </div>
            <div>
              <label>
                Heure de jeu
                <input type="text" name="game_time"/>
              </label>
            </div>
            <div>
            <label>
                Image
               <input type="file" name="image" />
            </label>
            </div>
            <input type="submit" value="Créer" />
          </form>
        </>
      );
    };
export default CreateBar;