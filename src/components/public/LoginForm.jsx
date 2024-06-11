import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../public/css/loginform.css";
import Swal from 'sweetalert2'

const LoginForm = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    const loginData = {
      username: username,
      password: password,
    };

    const loginDataJson = JSON.stringify(loginData);

    fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      body: loginDataJson,
      headers: {
        "Content-Type": "application/json",
      },  
      credentials: "include",
    }).then((response) => {
      if (response.status === 200) {
        setMessage("Connexion Réussie")
        navigate('/admin')
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
            title: 'Connexion réussie !'
          });
      }
      else {
        setMessage("Connexion refusée");
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
          title: 'Identifiants invalides.'
        });
      }
    }
  )
  };

  return (
    <>
      <div className="container"> 
      <div className="login-form">
      <form onSubmit={handleLoginSubmit}>
      <div className="input-group">
                    <label for="username">Pseudo</label>
                    <input type="text" id="username" name="username" required />
      </div>
                <div className="input-group">
                    <label for="password">Mot de passe</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button className="Login" type="submit">Connexion</button>
      </form>
      <p className="signupText">Pas encore de compte? Je m'inscris !<Link className="signupAccess" to="/signup"></Link></p>
      </div>
    </div>
    </>
  );
};

export default LoginForm;