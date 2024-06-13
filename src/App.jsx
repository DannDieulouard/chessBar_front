import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./pages/public/HomePage";
import ListBarsPage from "./pages/public/ListBarsPage";
import ListCitiesPage from "./pages/public/ListCitiesPage";
import DetailsCitiesPage from "./pages/public/DetailsCitiesPage";
import DetailsBarPage from "./pages/public/DetailsBarsPage";
import LoginPage from "./pages/public/LoginPage";
import LogoutPage from "./pages/public/LogoutPage";
import SignupPage from "./pages/public/SignupPage";
import ConceptPage from "./pages/public/ConceptPage";
import TournamentsPage from "./pages/public/TournamentsPage";
import RankingsPage from "./pages/public/RankingsPage";
import RulesPage from "./pages/public/RulesPages";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import AdminListUsersPage from "./pages/admin/AdminListUsersPage";
import AdminCreateUserPage from "./pages/admin/AdminCreateUserPage";
import AdminUpdateUserPage from "./pages/admin/AdminUpdateUserPage";
import AdminListBarsPage from "./pages/admin/AdminListBarsPage";
import AdminCreateBarPage from "./pages/admin/AdminCreateBarPage";
import AdminUpdateBarPage from "./pages/admin/AdminUpdateBarPage";
import AdminListTournamentsPage from "./pages/admin/AdminListTournamentsPage";
import AdminCreateTournamentsPage from "./pages/admin/AdminCreateTournamentsPage";
import AdminUpdateTournamentPage from "./pages/admin/AdminUpdateTournamentPage";
import AdminListRankingsPage from "./pages/admin/AdminListRankingsPage";
import AdminCreateRankingsPage from "./pages/admin/AdminCreateRankingsPage";
import AdminUpdateRankingPage from "./pages/admin/AdminUpdateRankingPage";
import UpdateProfilePage from "./pages/public/ProfilePage";
import NotFoundPage from "./pages/public/NotFoundPage";  

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} /> {/* This will catch all undefined routes */}
        <Route path="/concept" element={<ConceptPage />} />
        <Route path="/cities" element={<ListCitiesPage />} />
        <Route path="/cities/details/:id" element={<DetailsCitiesPage />} />
        <Route path="/bars" element={<ListBarsPage />} />
        <Route path="/bars/details/:id" element={<DetailsBarPage />} />
        <Route path="/tournaments" element={<TournamentsPage />} />
        <Route path="/rankings" element={<RankingsPage />} />
        <Route path="/rules" element={<RulesPage />} />

        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile/update/:id" element={<UpdateProfilePage />} />
        <Route path="/logout" element={<LogoutPage />} />

        <Route path="/admin" element={<AdminDashboardPage />} />
        <Route path="/admin/users" element={<AdminListUsersPage />} />
        <Route path="/admin/users/create" element={<AdminCreateUserPage />} />
        <Route path="/admin/users/update/:id" element={<AdminUpdateUserPage />} />
        <Route path="/admin/bars" element={<AdminListBarsPage />} />
        <Route path="/admin/bars/create" element={<AdminCreateBarPage />} />
        <Route path="/admin/bars/update/:id" element={<AdminUpdateBarPage />} />
        <Route path="/admin/tournaments" element={<AdminListTournamentsPage />} />
        <Route path="/admin/tournaments/create" element={<AdminCreateTournamentsPage />} />
        <Route path="/admin/tournaments/update/:id" element={<AdminUpdateTournamentPage />} />
        <Route path="/admin/rankings" element={<AdminListRankingsPage />} />
        <Route path="/admin/rankings/create" element={<AdminCreateRankingsPage />} />
        <Route path="/admin/rankings/update/:id" element={<AdminUpdateRankingPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}
export default App;
