import { Link } from "react-router-dom";
import "../admin/css/adminHeader.css";

const AdminHeader = () => {
  return (
    <>
    <nav>
        <ul className="menuAdmin">
        <div className="nav_logo"></div>
          <li><Link to="/admin/">Dashboard</Link></li>
          <li><Link to="/admin/bars/create">Créer un bar</Link></li>
          <li><Link to="/admin/inscriptions/create">Créer un créneau d'inscription</Link></li>
          <li><Link to="/admin/rankings/create">Créer un classement</Link></li>
          <li><Link to="/signup">Créer un compte</Link></li>
          <li><Link to="/logout">Se déconnecter</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default AdminHeader;