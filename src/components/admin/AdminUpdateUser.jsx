import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useVerifyToken } from "../../utils/authGuard";
import Sidebar from "./AdminSidebar";
import "../admin/css/adminUpdate.css";

const UpdateUser = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const decodedToken = useVerifyToken();

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

  const handleUpdateUser = (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;
    const firstName = event.target.firstName.value;
    const name = event.target.name.value;
    const postCode = event.target.postCode.value;
    const city = event.target.city.value;
    const email = event.target.email.value;
    const howChessbar = event.target.howChessbar.value;

    const userData = {
      username: username,
      password: password,
      firstName: firstName,
      name: name,
      postCode: postCode,
      city: city,
      email: email,
      howChessbar: howChessbar
    };

    const userDataJson = JSON.stringify(userData);

    fetch("http://localhost:5000/api/users/" + id, {
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
        navigate("/admin/users");
      });
  };

  return (
    <main>
      {decodedToken.roleId == 1 || decodedToken.roleId == 2 ? (
    <>
      <h2>Modifier l'utilisateur</h2>
      <Sidebar />
      {user && (
        <div className="container"> 
        <div className="update-form">
        <form onSubmit={handleUpdateUser}>
          <div className="input-group">
            <label>
              Pseudo
              <input type="text" name="username" defaultValue={user.username} />
            </label>
          </div>
          <div className="input-group">
            <label>
              Mot de passe
              <input type="password" name="password" defaultValue={user.password} />
            </label>
          </div>
          <div className="input-group">
            <label>
              Prénom    
              <input type="text" name="firstName" defaultValue={user.firstName} />
            </label>
          </div>
          <div className="input-group">
            <label>
              Nom de famille    
              <input type="text" name="name" defaultValue={user.name} />
            </label>
          </div>
          <div className="input-group">
          <label>
              Code postal
              <input type="number" name="postCode" defaultValue={user.postCode} />
          </label>
          </div>
          <div className="input-group">
          <label>
              Ville
              <input type="text" name="city" defaultValue={user.city} />
          </label>
          </div>
          <div className="input-group">
          <label>
              Email
              <input type="email" name="email" defaultValue={user.email} />
          </label>
          </div>
          <div className="input-group">
          <label>
              Phone
              <input type="text" name="phone" defaultValue={user.phone} />
          </label>
          </div>
          <div className="input-group">
          <label>
              Comment avez-vous connu ChessBar?
              <textarea name="howChessbar" rows="5" cols="54" defaultValue={user.howChessbar}></textarea>
          </label>
          </div>
          <button className="Update" type="submit">Mettre à jour</button>
        </form>
        </div>
        </div>
      )}
    </>
    ) : (
      useEffect(() => {
        navigate("/")
            }, [])
     )}
    </main>
  );
};

export default UpdateUser;