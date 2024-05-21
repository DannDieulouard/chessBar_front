import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/public/HomePage";
import ListBarsPage from "./pages/public/ListBarsPage";
import ListCitiesPage from "./pages/public/ListCitiesPage";
import DetailsBarPage from "./pages/public/DetailsBarsPage";
import LoginPage from "./pages/public/LoginPage";
import LogoutPage from "./pages/public/LogoutPage";
import SignupPage from "./pages/public/SignupPage";
import ConceptPage from "./pages/public/ConceptPage";
import TournamentsPage from "./pages/public/TournamentsPage";
import RankingsPage from "./pages/public/RankingsPage";
import RulesPage from "./pages/public/RulesPages";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import AdminListBarsPage from "./pages/admin/AdminListBarsPage";
import AdminCreateBarPage from "./pages/admin/AdminCreateBarPage";
import AdminUpdateBarPage from "./pages/admin/AdminUpdateBarPage";
import AdminListTournamentsPage from "./pages/admin/AdminListTournamentsPage";
import AdminCreateTournamentsPage from "./pages/admin/AdminCreateTournamentsPage";
import AdminListRankingsPage from "./pages/admin/AdminListRankingsPage";
import AdminCreateRankingsPage from "./pages/admin/AdminCreateRankingsPage";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/concept" element={<ConceptPage />} />
        <Route path="/cities" element={<ListCitiesPage />} />
        <Route path="/bars" element={<ListBarsPage />} />
        <Route path="/bars/details/:id" element={<DetailsBarPage />} />
        <Route path="/tournaments" element={<TournamentsPage />} />
        <Route path="/rankings" element={<RankingsPage />} />
        <Route path="/rules" element={<RulesPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/admin" element={<AdminDashboardPage />} />
        <Route path="/admin/bars" element={<AdminListBarsPage />} />
        <Route path="/admin/bars/create" element={<AdminCreateBarPage />} />
        <Route path="/admin/bars/:id/update" element={<AdminUpdateBarPage />} />
        <Route path="/admin/tournaments" element={<AdminListTournamentsPage />} />
        <Route path="/admin/tournaments/create" element={<AdminCreateTournamentsPage />} />
        <Route path="/admin/rankings" element={<AdminListRankingsPage />} />
        <Route path="/admin/rankings/create" element={<AdminCreateRankingsPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}
export default App;
