import "../admin/css/adminDashboard.css";
import { useVerifyToken } from "../../utils/authGuard";
import Sidebar from "./AdminSidebar";
import AdminMiniHeader from "./AdminMiniHeader";

const AdminDashboard = () => {
  useVerifyToken();

  return (
    <main>
      <h2>Dashboard Admin </h2>
      <AdminMiniHeader />
      <Sidebar />
    </main> 
  );
};

export default AdminDashboard;