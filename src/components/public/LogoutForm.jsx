import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

const LogoutForm = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = Cookies.get("access_token");

    if (accessToken) {
      const decodedToken = jwtDecode(accessToken);

      if (!decodedToken.userId) {
        navigate("/login");
      }
    } else {
      navigate("/login");
    }

    // Idéalement, utilisez la date de validé pour re-générer le token quand il est périmé
    // si le token est périmé et qu'il n'a pas été re-généré : déconnecté l'user
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/api/users/logout", {
      method: "POST",
      credentials: "include",
    }).then((response) => {
      if (response.status === 200) {
        navigate('/admin')
      } else {
        setMessage("Une erreur est survenue");
      }
    });
}, []);

  return (
    <>
    <p></p>
    </>
  );
};

export default LogoutForm;