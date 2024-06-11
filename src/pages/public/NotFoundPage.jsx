import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../components/public/images/footer/logo.svg';
import './css/notfoundpage.css'; 

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h2 className="not-found-title">404</h2>
      <img src={logo} alt="logo" />
      <p className="not-found-message">Oops! La page que vous recherchez n'existe pas.</p>
      <Link to="/" className="home-link">Retour à l'accueil</Link>
    </div>
  );
};

export default NotFoundPage;
