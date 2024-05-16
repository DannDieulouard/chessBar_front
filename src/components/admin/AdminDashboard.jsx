import "../admin/css/adminDashboard.css";
import { Link } from "react-router-dom";
import { useVerifyToken } from "../../utils/authGuard";

const AdminDashboard = () => {
  useVerifyToken();

  return (
    <main>
      <h2>Bienvenue admin ! </h2>
      <section>
            <article className="adminDashboard">
              <button><Link to={`/admin/users`}>Gestion des utilisateurs</Link></button>
              <button><Link to={`/admin/bars`}>Gestion des bars</Link></button>
              <button><Link to={`/admin/inscriptions`}>Gestion des tournois</Link></button>
              <button><Link to={`/admin/standings`}>Gestion des classements</Link></button>
            </article>
      </section>
    </main>
  );
};

export default AdminDashboard;