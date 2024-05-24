import { Link } from "react-router-dom";
import './css/adminMiniHeader.css';

const AdminMiniHeader = () => {
    return (
            <ul className="menuAdmin">
          <li><Link to="/admin/bars/create">Créer un bar</Link></li>
          <li><Link to="/admin/tournaments/create">Créer un tournoi</Link></li>
          <li><Link to="/admin/rankings/create">Créer un classement</Link></li>
          <li><Link to="/admin/users/create">Créer un utilisateur</Link></li>
        </ul>
    );
  };
  
  export default AdminMiniHeader;