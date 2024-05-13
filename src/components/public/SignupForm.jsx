import { useState } from "react";
import { useNavigate } from "react-router-dom"

const SignupForm = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignupSubmit = (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    const loginData = {
      username: username,
      password: password,
    };

    const loginDataJson = JSON.stringify(loginData);

    fetch("http://localhost:5000/api/users/signup", {
      method: "POST",
      body: loginDataJson,
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((response) => {
      if (response.status === 200) {
        navigate('/bars')
      } else {
        setMessage("Connexion refusée");
      }
    });
  };

  return (
    <>
      <h2>Créez votre nouveau compte : </h2>
      <p>{message}</p>
      <form onSubmit={handleSignupSubmit}>
        <label>
          Nom de l'utilisateur
          <input name="username" type="text" />
        </label>

        <label>
          Mot de passe
          <input name="password" type="password" />
        </label>

        <label>
          Adresse
          <input name="adress" type="json" />
        </label>

        <label>
          Email
          <input name="email" type="text" />
        </label>

        <input type="submit" />
      </form>
    </>
  );
};

export default SignupForm;