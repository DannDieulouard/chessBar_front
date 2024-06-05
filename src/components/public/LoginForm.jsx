import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../public/css/loginform.css";
import { useVerifyToken } from "../../utils/authGuard";

const LoginForm = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const decodedToken = useVerifyToken()

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
      }
      else {
        setMessage("Connexion refusée");
      }
    }
  )
  };

  return (
    <>
      <p>{message}</p>
      <div className="container"> 
      <div className="login-form">
      <form onSubmit={handleLoginSubmit}>
      <div className="input-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" required />
      </div>
                <div className="input-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button className="Login" type="submit">Login</button>
      </form>
      <p>Pas encore de compte? Veuillez en créer un ici : <Link to="/signup">Sign up !</Link></p>
      </div>
    </div>
    </>
  );
};

export default LoginForm;