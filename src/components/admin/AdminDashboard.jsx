import "../admin/css/adminDashboard.css";
import { useVerifyToken } from "../../utils/authGuard";
import Sidebar from "./AdminSidebar";
import AdminMiniHeader from "./AdminMiniHeader";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const decodedToken = useVerifyToken();

  return (
    <main>
   {decodedToken.roleId == 1 || decodedToken.roleId == 2 ? (
    <>
      <h2>Dashboard Admin </h2>
      <AdminMiniHeader />
      <Sidebar />
      </>
   ) : (
    useEffect(() => {
      navigate("/")
          }, [])
   )}
    </main>
  )
}

export default AdminDashboard;