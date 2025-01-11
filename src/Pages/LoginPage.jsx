import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../AppContext';

const LoginPage = () => {
  const { companies, setUser } = useContext(AppContext); // Acceder al contexto
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Buscar usuario en las compañías
    const user = companies.find((company) => company.email === email);

    if (user) {
      setUser(user); // Guardar el usuario en el contexto
      setError(''); // Limpiar errores
      navigate('/dashboard'); // Redirigir al Dashboard
    } else {
      setError('Correo no registrado'); // Mostrar error
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: '10px', padding: '10px' }}
        />
        <button type="submit" style={{ padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none' }}>
          Iniciar Sesión
        </button>
        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
