import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import './css/adminSidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">Admin</div>
      <List>
        <ListItem component={Link} to="/admin">
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem component={Link} to="/admin/users">
          <ListItemIcon><PeopleIcon /></ListItemIcon>
          <ListItemText primary="Utilisateurs" />
        </ListItem>
        <ListItem component={Link} to="/admin/bars">
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Bars" />
        </ListItem>
        <ListItem component={Link} to="/admin/tournaments">
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Tournois" />
        </ListItem>
        <ListItem component={Link} to="/admin/rankings">
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Classements" />
        </ListItem>
        <ListItem component={Link} to="/logout">
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Se déconnecter" />
        </ListItem>
        <ListItem component={Link} to="/">
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Homepage" />
        </ListItem>
      </List>
      <div className="sidebar-footer">
        &copy; 2024 ChessBar
      </div>
    </div>
  );
};

export default Sidebar;