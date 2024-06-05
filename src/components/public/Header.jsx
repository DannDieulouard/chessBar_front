import "../public/css/header.css";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useVerifyToken } from "../../utils/authGuard";

const checkCookie = (access_token) => {
  return Cookies.get(access_token) !== undefined;
};

const Header = () => {
  const [hasCookie, setHasCookie] = useState(false);

  const decodedToken = useVerifyToken()

  useEffect(() => {
    const cookieExists = checkCookie('access_token');
    setHasCookie(cookieExists);
  }, []);

  return (
    <>
      <nav>
        <ul className="menu">
          <li><Link to="/">ACCUEIL</Link></li>
          <li><Link to="/concept">CONCEPT</Link></li>
          <li><Link to="/bars">BARS</Link></li>
          <li><Link to="/tournaments">TOURNOIS</Link></li>
          <li><Link to="/rankings">CLASSEMENTS</Link></li>
          <li><Link to="/rules">RÈGLEMENT</Link></li>
          {hasCookie ? (
            <>
              <section>
                <button className="profile">
                  <Link to={`/profile/update/${decodedToken.userId}`}></Link>
                </button>
              </section>
              <section>
                <button className="logout"><Link to="/logout"></Link></button>
              </section>
            </>
          ) : (
            <button className="login"><Link to="/login"></Link></button>
          )}
        </ul>
      </nav>
      <header>
        <div className="bannerlogo"></div>
        <h1>JOUEZ AUX ECHECS PRÈS DE CHEZ VOUS !</h1>
      </header>
    </>
  );
};

export default Header;
