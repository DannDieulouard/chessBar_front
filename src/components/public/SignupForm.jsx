import { useState } from "react";
import { useNavigate } from "react-router-dom"

const SignupForm = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    const surname = e.target.surname.value
    const name = e.target.name.value
    const postCode = e.target.postCode.value
    const city = e.target.city.value
    const email = e.target.email.value
    const phone = e.target.phone.value
    const username = e.target.username.value
    const password = e.target.password.value
    const howChessbar = e.target.howChessbar.value
    
    const loginData = {
          surname: surname,
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
            <div>
              <label>
                Prénom
                <input type="text" name="surname" />
              </label>
            </div>
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
                Email
                <input type="email" name="email" />
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
                Pseudo Chess.com / Lichess
                <input type="text" name="username" />
              </label>
            </div>
            <div>
              <label>
                Mot de passe
                <input type="password" name="password" />
              </label>
            </div>
            <div>
              <label>
                Comment avez-vous connu ChessBar ?
                <input type="text" name="howChessbar" />
              </label>
            </div>
            <input type="submit" value="Créer" />
          </form>
    </>
  );
};

export default SignupForm;