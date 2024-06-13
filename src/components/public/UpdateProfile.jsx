import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useVerifyToken } from "../../utils/authGuard";
import "../public/css/updateprofile.css";
import Swal from 'sweetalert2'

const UpdateProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const decodedToken = useVerifyToken();

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
    const firstName = event.target.firstName.value;
    const name = event.target.name.value;
    const postCode = event.target.postCode.value;
    const city = event.target.city.value;
    const email = event.target.email.value;
    const howChessbar = event.target.howChessbar.value;

    const userData = {
      username,
      password,
      firstName,
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
      .then((response) => {
        if (response.status === 201) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          }
        });
    
        Toast.fire({
          icon: 'success',
          title: 'Compte modifié !'
        });
        navigate("/")
      } else {
        setNeedRefresh(!needsRefresh);
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          }
        });
    
        Toast.fire({
          icon: 'error',
          title: 'Changements refusés. Un champ du formulaire est erroné.'
        });
      }});
  };

  const handleDeleteProfile = (event, id) => {
    fetch(`http://localhost:5000/api/users/profile/${id}`, {
      method: "DELETE",
      credentials: "include",
    }).then((response) => {
      if (response.status === 200) {
        Swal.fire({
          title: "Etes-vous sûr(e)?",
          text: "Cette action est irréversible !",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Oui, je veux le supprimer !",
          cancelButtonText: "Annuler"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Supprimé !",
              text: "Votre compte a bien été supprimé.",
              icon: "success"
            });
            navigate("/login")
          }
        });
      } else {
        setNeedRefresh(!needsRefresh);
        setMessage("Connexion refusée")
      }
    });
  };

  return (
    <><div className="updateProfile">
      <h2>Modifier l'utilisateur</h2>
      <h4>*Champ obligatoire</h4>
      {user && decodedToken.userId == id ? (
        <div className="container">
          <div className="updateProfile-form">
            <form onSubmit={handleUpdateProfile}>
              <div className="input-group">
                <label>Prénom*</label>
                <input
                  type="text"
                  name="firstName"
                  defaultValue={user.firstName}
                  required
                />
              </div>
              <div className="input-group">
                <label>Nom*</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={user.name}
                  required
                />
              </div>
              <div className="input-group">
                <label>Pseudo* Chess.com / Lichess</label>
                <input
                  type="text"
                  name="username"
                  defaultValue={user.username}
                  required
                />
              </div>
              <div className="input-group">
                <label>Email* (ex: "magnus.carlsen@gmail.com")</label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user.email}
                  required
                />
              </div>
              <div className="input-group">
                <label>Code Postal (ex: "33000")</label>
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
                <label>Numéro de téléphone* (ex: "0799XXXXXX")</label>
                <input
                  type="number"
                  name="phone"
                  defaultValue={user.phone}
                  required
                />
              </div>
              <div className="input-group">
                <label>Mot de passe*</label>
                <input
                  type="password"
                  name="password"
                  defaultValue={user.password}
                  required
                />
              </div>
              <div className="input-group">
                <label>Comment avez-vous connu ChessBar ?</label>
                <textarea name="howChessbar" rows="5" cols="54" defaultValue={user.howChessbar}></textarea>
              </div>
              <button className="UpdateProfile" type="submit">
                Modifier mes données
              </button>
              <button className="DeleteProfile" onClick={(event) => handleDeleteProfile(event, id)}>Supprimer mon compte</button>
            </form>
          </div>
        </div>
      ) : (
        navigate("/")
      )}
      </div>
    </>
  );
};

export default UpdateProfile;