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
              <button><Link to={`/admin/bars`}>Lien vers la liste des bars</Link></button>
              <button><Link to={`/admin/inscriptions`}>Lien vers la liste des créneaux d'inscription</Link></button>
              <button><Link to={`/admin/standings`}>Lien vers la liste des classements</Link></button>
            </article>
      </section>
    </main>
  );
};

export default AdminDashboard;