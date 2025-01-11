import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

function Tickets() {
  const { tickets } = useContext(AppContext);

  return (
    <div className="ticket-history-page">
      <h1>Historial de Tickets</h1>
      {tickets.length === 0 ? (
        <p>No hay tickets disponibles.</p>
      ) : (
        <ul>
          {tickets.map((ticket) => (
            <li key={ticket.id}>
              <strong>{ticket.title}</strong> - {ticket.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Tickets
