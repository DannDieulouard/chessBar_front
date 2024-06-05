import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../public/css/updateprofile.css";

const UpdateProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [needsRefresh, setNeedRefresh] = useState(false);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/api/users/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      })
        .then((response) => response.json())
        .then((userData) => {
          setUser(userData.data);
        });
    }
  }, [id]);

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
      username,
      password,
      surname,
      name,
      postCode,
      city,
      email,
      howChessbar,
    };

    fetch(`http://localhost:5000/api/users/profile/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      credentials: "include",
    })
      .then((response) => response.json())
      .then(() => {
        navigate("/");
      });
  };

  const handleDeleteProfile = (event, id) => {
    fetch(`http://localhost:5000/api/users/profile/${id}`, {
      method: "DELETE",
      credentials: "include",
    }).then((response) => {
      if (response.status === 200) {
        navigate("/login");
      }

      setNeedRefresh(!needsRefresh);
    });
  };

  return (
    <>
      <h2>Modifier l'utilisateur</h2>

      {user && (
        <div className="container">
          <div className="updateProfile-form">
            <form onSubmit={handleUpdateProfile}>
              <div className="input-group">
                <label>Prénom</label>
                <input
                  type="text"
                  name="surname"
                  defaultValue={user.surname}
                  required
                />
              </div>
              <div className="input-group">
                <label>Nom</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={user.name}
                  required
                />
              </div>
              <div className="input-group">
                <label>Code postal</label>
                <input
                  type="text"
                  name="postCode"
                  defaultValue={user.postCode}
                  required
                />
              </div>
              <div className="input-group">
                <label>Ville</label>
                <input
                  type="text"
                  name="city"
                  defaultValue={user.city}
                  required
                />
              </div>
              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user.email}
                  required
                />
              </div>
              <div className="input-group">
                <label>Numéro de téléphone</label>
                <input
                  type="number"
                  name="phone"
                  defaultValue={user.phone}
                  required
                />
              </div>
              <div className="input-group">
                <label>Pseudo Chess.com / Lichess</label>
                <input
                  type="text"
                  name="username"
                  defaultValue={user.username}
                  required
                />
              </div>
              <div className="input-group">
                <label>Mot de passe</label>
                <input
                  type="password"
                  name="password"
                  defaultValue={user.password}
                  required
                />
              </div>
              <div className="input-group">
                <label>Comment avez-vous connu ChessBar ?</label>
                <input
                  type="text"
                  name="howChessbar"
                  defaultValue={user.howChessbar}
                />
              </div>
              <button className="UpdateProfile" type="submit">
                Modifier mes données
              </button>
              <button className="DeleteProfile" onClick={(event) => handleDeleteProfile(event, id)}>Supprimer mon compte</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateProfile;