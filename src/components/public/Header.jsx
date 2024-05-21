import { Link } from "react-router-dom";
import "../public/css/header.css";

const Header = () => {

    return (
      <>
          <nav>
            <ul className="menu">
            <div className="nav_logo"></div>
              <li><Link to="/">ACCUEIL</Link></li>
              <li><Link to="/concept">CONCEPT</Link></li>
              <li><Link to="/cities">VILLES</Link></li>
              <li><Link to="/tournaments">TOURNOIS</Link></li>
              <li><Link to="/rankings">CLASSEMENTS</Link></li>
              <li><Link to="/rules">RÈGLEMENT</Link></li>
              <li><Link to="/login">Se connecter</Link></li>
              <li><Link to="/logout">Se déconnecter</Link></li>
            </ul>
          </nav>
          <header>
            <div class="bannerlogo"></div>
            <h1>JOUEZ AUX ECHECS PREZ DE CHEZ VOUS !</h1> 
          </header>
      </>
    )
}
export default Header;