import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import "../public/css/tournaments.css";

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
              <div className="tournaments">
              <h1>INSCRIPTIONS TOURNOIS</h1>
              </div>
          ) : (
            <>
            <div className="tournaments">
            <h2>Veuillez d'abord vous authentifier avant d'accéder à nos tournois !</h2>
            <div className="tournamentAccess"><Link to="/signup">Sign up !</Link></div>
            </div>
            </>
          )}
        </>
    )
}

export default Tournaments;