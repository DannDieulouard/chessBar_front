import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"
import { useVerifyToken } from "../../utils/authGuard";

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
        navigate('/')
      } 
      else {
        setMessage("Connexion refusée");
      }
    })
    .then((decodedToken) => {
      if (decodedToken === 1) {
        navigate('/admin')
      } 
      else {
        navigate('/');
      }
    });
  };

  return (
    <>
      <p>{message}</p>
      <form onSubmit={handleLoginSubmit}>
        <label>
          Nom de l'utilisateur
          <input name="username" type="text" />
        </label>

        <label>
          Mot de passe
          <input name="password" type="password" />
        </label>

        <input type="submit" />
      </form>
      <p>Pas encore de compte? Veuillez en créer un ici : <Link to="/signup">Je crée mon compte</Link></p>
    </>
  );
};

export default LoginForm;