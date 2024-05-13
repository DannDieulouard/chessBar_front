import { Link } from "react-router-dom";

const AdminHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/admin/">Dashboard</Link>
            <Link to="/admin/bars">Gérer les bars</Link>
            <Link to="/admin/bars/create">Créer un bar</Link>
            <Link to="/signup">Créer un compte</Link>
            <Link to="/logout">Se déconnecter</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AdminHeader;