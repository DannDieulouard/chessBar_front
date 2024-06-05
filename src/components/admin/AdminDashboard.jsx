import "../admin/css/adminDashboard.css";
import { useVerifyToken } from "../../utils/authGuard";
import Sidebar from "./AdminSidebar";
import AdminMiniHeader from "./AdminMiniHeader";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const decodedToken = useVerifyToken();
  console.log(decodedToken)

  if(decodedToken.roleId === 3) {
    navigate("/")
  }

  return (
    <main>
      <h2>Dashboard Admin </h2>
      <AdminMiniHeader />
      <Sidebar />
    </main>
  )
}

export default AdminDashboard;