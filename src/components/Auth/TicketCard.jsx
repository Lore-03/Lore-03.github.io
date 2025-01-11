import React from 'react';

const TicketCard = ({ ticket }) => {
  return (
    <div className={`border p-4 mb-2 ${ticket.status === 'Finalizado' ? 'bg-green-100' : ticket.status === 'En Proceso' ? 'bg-yellow-100' : 'bg-red-100'}`}>
      <h5 className="font-bold">{ticket.title}</h5>
      <p>{ticket.description}</p>
      <p><strong>Estado:</strong> {ticket.status}</p>
    </div>
  );
};

export default TicketCard;