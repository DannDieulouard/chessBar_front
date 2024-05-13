import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/public/HomePage";
import ListBarsPage from "./pages/public/ListBarsPage";
import DetailsBarPage from "./pages/public/DetailsBarsPage";
import LoginPage from "./pages/public/LoginPage";
import LogoutPage from "./pages/public/LogoutPage";
import SignupPage from "./pages/public/SignupPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import AdminListBarsPage from "./pages/admin/AdminListBarsPage";
import AdminCreateBarPage from "./pages/admin/AdminCreateBarPage";
import AdminUpdateBarPage from "./pages/admin/AdminUpdateBarPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Bars" element={<ListBarsPage />} />
        <Route path="/bars/details/:id" element={<DetailsBarPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/admin" element={<AdminDashboardPage />} />
        <Route path="/admin/bars" element={<AdminListBarsPage />} />
        <Route path="/admin/bars/create" element={<AdminCreateBarPage />} />
        <Route path="/admin/bars/:id/update" element={<AdminUpdateBarPage />} />

      </Routes>
    </BrowserRouter>
  );
}
export default App;
