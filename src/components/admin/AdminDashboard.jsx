import { Link } from "react-router-dom";
import { useVerifyToken } from "../../utils/authGuard";

const AdminDashboard = () => {
  useVerifyToken();

  return (
    <main>
      <h2>Bienvenue admin ! </h2>
      <section>
            <article>
              <button><Link to={`/admin/bars`}>Lien vers la liste des bars</Link></button>
            </article>
      </section>
    </main>
  );
};

export default AdminDashboard;