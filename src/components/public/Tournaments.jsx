import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';

const checkCookie = (access_token) => {
    return Cookies.get(access_token) !== undefined;
  };

const Tournaments = () => {
    const navigate = useNavigate();
    const [hasCookie, setHasCookie] = useState(false);

  useEffect(() => {
    const cookieExists = checkCookie('access_token');
    setHasCookie(cookieExists);
  }, []);

    return (
        <>
            {hasCookie ? (
              <h1>INSCRIPTIONS TOURNOIS</h1>
          ) : (
            <>
            <h2>Veuillez d'abord vous authentifier avant d'accéder à nos tournois !</h2>
            <p>Super lien ici : <Link to="/signup">Sign up !</Link></p>
            </>
          )}
        </>
    )
}

export default Tournaments;