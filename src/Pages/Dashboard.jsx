import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../AppContext';

const Dashboard = () => {
  const { user, projects } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      console.log('No user found, redirecting to login');
      navigate('/'); // Redirige al login si no hay usuario
    } else {
      console.log('User found:', user);
    }
  }, [user, navigate]);

  if (!user) return null; // Evitar renderizar si no hay usuario

  const userProjects = projects.filter((project) => project.companyId === user.id);
  console.log('User projects:', userProjects);

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <h1>Bienvenido, {user.name}</h1>
      <h2>Proyectos de {user.name}</h2>
      {userProjects.length > 0 ? (
        <ul>
          {userProjects.map((project) => (
            <li key={project.id}>{project.name}</li>
          ))}
        </ul>
      ) : (
        <p>No hay proyectos asociados.</p>
      )}
    </div>
  );
};

export default Dashboard;
