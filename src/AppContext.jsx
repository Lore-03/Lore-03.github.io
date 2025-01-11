import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Usuario autenticado
  const [companies] = useState([
    { id: 1, name: 'Compañía 1', nit: '123456789', phone: '123456789', address: 'Calle 1', email: 'compania1@email.com' },
    { id: 2, name: 'Compañía 2', nit: '987654321', phone: '987654321', address: 'Calle 2', email: 'compania2@email.com' },
    { id: 3, name: 'Compañía 3', nit: '456123789', phone: '456123789', address: 'Calle 3', email: 'compania3@email.com' },
  ]);
  const [projects] = useState([
    { id: 1, companyId: 1, name: 'Proyecto 1' },
    { id: 2, companyId: 2, name: 'Proyecto 2' },
    { id: 3, companyId: 2, name: 'Proyecto 3' },
  ]);
  const [tickets, setTickets] = useState([]); // Tickets dinámicos

  return (
    <AppContext.Provider value={{ user, setUser, companies, projects, tickets, setTickets }}>
      {children}
    </AppContext.Provider>
  );
};
