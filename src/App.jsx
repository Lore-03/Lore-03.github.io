import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './AppContext';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import DashboardPage from './Pages/Dashboard';
import ProjectDetailPage from './Pages/ProjectDetailPage';
import TicketHistoryPage from './Pages/Tickets';
import './index.css';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
          <Route path="/tickets" element={<TicketHistoryPage />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
