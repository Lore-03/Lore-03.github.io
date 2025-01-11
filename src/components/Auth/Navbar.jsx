import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-lg font-bold">Gestión de Proyectos</h1>
      <div>
        <Link to="/dashboard" className="mr-4">Dashboard</Link>
        <Link to="/tickets">Historial de Tickets</Link>
      </div>
    </nav>
  );
};

export default Navbar;