import { Link } from "react-router-dom";
import "../public/header.css";

const Header = () => {

    return (
      <>
          <nav>
            <ul className="menu">
              <li><Link to="/">ACCUEIL</Link></li>
              <li><Link to="/bars">BARS</Link></li>
              <li><Link to="/login">Se connecter</Link></li>
              <li><Link to="/logout">Se déconnecter</Link></li>
              <li><Link to="/signup">Créer un compte</Link></li>
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