import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const LogoutForm = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/users/logout", {
      method: "POST",
      credentials: "include",
    }).then((response) => {
      if (response.status === 200) {
        navigate('/')
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