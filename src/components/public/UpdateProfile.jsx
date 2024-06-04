import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useVerifyToken } from "../../utils/authGuard";

const UpdateProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useVerifyToken();

  useEffect(() => {
    fetch("http://localhost:5000/api/users/" + id, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((userData) => {
        setUser(userData.data);
      });
  }, []);

  const handleUpdateProfile = (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;
    const surname = event.target.surname.value;
    const name = event.target.name.value;
    const postCode = event.target.postCode.value;
    const city = event.target.city.value;
    const email = event.target.email.value;
    const howChessbar = event.target.howChessbar.value;

    const userData = {
      username: username,
      password: password,
      surname: surname,
      name: name,
      postCode: postCode,
      city: city,
      email: email,
      howChessbar: howChessbar
    };

    const userDataJson = JSON.stringify(userData);

    fetch("http://localhost:5000/api/users/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: userDataJson,
      credentials: "include",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        navigate("/");
      });
  };

  return (
    <>
      <h2>Modifier l'utilisateur</h2>

      {user && (
        <form onSubmit={handleUpdateProfile}>
          <div>
            <label>
              Pseudo
              <input type="text" name="username" defaultValue={user.username} />
            </label>
          </div>
          <div>
            <label>
              Mot de passe
              <input type="password" name="password" defaultValue={user.password} />
            </label>
          </div>
          <div>
            <label>
              Prénom    
              <input type="text" name="surname" defaultValue={user.surname} />
            </label>
          </div>
          <div>
            <label>
              Nom de famille    
              <input type="text" name="name" defaultValue={user.name} />
            </label>
          </div>
          <div>
          <label>
              Code postal
              <input type="number" name="postCode" defaultValue={user.postCode} />
          </label>
          </div>
          <div>
          <label>
              Ville
              <input type="text" name="city" defaultValue={user.city} />
          </label>
          </div>
          <div>
          <label>
              Email
              <input type="email" name="email" defaultValue={user.email} />
          </label>
          </div>
          <div>
          <label>
              Comment avez-vous connu ChessBar?
              <input type="text" name="howChessbar" defaultValue={user.howChessbar} />
          </label>
          </div>
          <input type="submit" value="Mettre à jour" />
        </form>
      )}
    </>
  );
};

export default UpdateProfile;