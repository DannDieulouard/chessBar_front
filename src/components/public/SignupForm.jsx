import { useState } from "react";
import { useNavigate } from "react-router-dom"
import "../public/css/signupform.css";
import Swal from 'sweetalert2'

const SignupForm = () => {
  const navigate = useNavigate();

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    const firstName = e.target.firstName.value
    const name = e.target.name.value
    const postCode = e.target.postCode.value
    const city = e.target.city.value
    const email = e.target.email.value
    const phone = e.target.phone.value
    const username = e.target.username.value
    const password = e.target.password.value
    const howChessbar = e.target.howChessbar.value
    
    const loginData = {
          firstName: firstName,
          name: name,
          city : city,
          email: email,
          postCode: postCode,
          phone: phone,
          username: username,
          password: password,
          howChessbar: howChessbar
        };

        const loginDataJson = JSON.stringify(loginData)

    fetch("http://localhost:5000/api/users/signup", {
      method: "POST",
      body: loginDataJson,
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((response) => {
      if (response.status === 200) {
        navigate('/login')
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
          title: 'Compte créé !'
        });
      } else {
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
          title: 'Identifiants invalides. Veuillez vous reconnecter!'
        });
      }
    });
  };

  return (
    <>
      <h2>Créez votre nouveau compte </h2>
      <h6>*Champ obligatoire</h6>
      <div className="container"> 
      <div className="signup-form">
      <form onSubmit={handleSignupSubmit}>
            <div className="input-group">
              <label>Prénom*</label>
              <input type="text" name="firstName" />
            </div>
            <div className="input-group">
              <label>Nom*</label>
              <input type="text" name="name" />
            </div>
            <div className="input-group">
              <label>Pseudo* Chess.com / Lichess</label>
              <input type="text" name="username" />
            </div>
            <div className="input-group">
              <label>Email* (ex: "magnus.carlsen@gmail.com")</label>
              <input type="email" name="email" />
            </div>
            <div className="input-group">
              <label>Code postal (ex: "33000")</label>
              <input type="text" name="postCode" />
            </div>
            <div className="input-group">
              <label>Ville</label>
              <input type="text" name="city" />
            </div>
            <div className="input-group">
              <label>Numéro de téléphone* (ex: "0799XXXXXX")</label>
              <input type="text" name="phone"/>
            </div>
            <div className="input-group">
              <label>Mot de passe*</label>
              <input type="password" name="password" />
            </div>
            <div className="input-group">
              <label>Comment avez-vous connu ChessBar ?</label>
              <textarea name="howChessbar" rows="5" cols="54"></textarea>
            </div>
            <button className="Signup" type="submit">Envoyer</button>
          </form>
          </div>
          </div>
    </>
  );
};

export default SignupForm;