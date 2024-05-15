import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/public/HomePage";
import ListBarsPage from "./pages/public/ListBarsPage";
import DetailsBarPage from "./pages/public/DetailsBarsPage";
import LoginPage from "./pages/public/LoginPage";
import LogoutPage from "./pages/public/LogoutPage";
import SignupPage from "./pages/public/SignupPage";
import ConceptPage from "./pages/public/ConceptPage";
import InscriptionsPage from "./pages/public/InscriptionsPage";
import StandingsPage from "./pages/public/StandingsPage";
import RulesPage from "./pages/public/RulesPages";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import AdminListBarsPage from "./pages/admin/AdminListBarsPage";
import AdminCreateBarPage from "./pages/admin/AdminCreateBarPage";
import AdminUpdateBarPage from "./pages/admin/AdminUpdateBarPage";
import AdminListInscriptionsPage from "./pages/admin/AdminListInscriptionsPage";
import AdminCreateInscriptionsPage from "./pages/admin/AdminCreateInscriptionsPage";
import AdminListStandingsPage from "./pages/admin/AdminListStandingsPage";
import AdminCreateStandingsPage from "./pages/admin/AdminCreateStandingsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/concept" element={<ConceptPage />} />
        <Route path="/bars" element={<ListBarsPage />} />
        <Route path="/bars/details/:id" element={<DetailsBarPage />} />
        <Route path="/inscriptions" element={<InscriptionsPage />} />
        <Route path="/standings" element={<StandingsPage />} />
        <Route path="/rules" element={<RulesPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/admin" element={<AdminDashboardPage />} />
        <Route path="/admin/bars" element={<AdminListBarsPage />} />
        <Route path="/admin/bars/create" element={<AdminCreateBarPage />} />
        <Route path="/admin/bars/:id/update" element={<AdminUpdateBarPage />} />
        <Route path="/admin/inscriptions" element={<AdminListInscriptionsPage />} />
        <Route path="/admin/inscriptions/create" element={<AdminCreateInscriptionsPage />} />
        <Route path="/admin/standings" element={<AdminListStandingsPage />} />
        <Route path="/admin/standings/create" element={<AdminCreateStandingsPage />} />


      </Routes>
    </BrowserRouter>
  );
}
export default App;
