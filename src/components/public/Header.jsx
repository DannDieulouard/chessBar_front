import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header>
                <h1>Welcome to ChessBar !</h1>
                <nav>
        <ul>
        <Link to="/bars">Liste des bars</Link>
          <Link to="/login">Se connecter</Link>
          <Link to="/logout">Se déconnecter</Link>
          <Link to="/signup">Créer un compte</Link>
        </ul>
      </nav>
        </header>
    )
}
export default Header;