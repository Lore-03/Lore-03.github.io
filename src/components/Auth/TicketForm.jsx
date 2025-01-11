import React, { useState } from 'react';

const TicketForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, status: 'Activo' });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4">
      <h3 className="text-lg font-semibold mb-2">Nuevo Ticket</h3>
      <input 
        type="text" 
        placeholder="Título" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        className="border p-2 mb-2 w-full"
        required
      />
      <textarea 
        placeholder="Descripción" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        className="border p-2 mb-2 w-full"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Crear Ticket</button>
    </form>
  );
};

export default TicketForm;
