import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="border p-4 mb-4 shadow-md">
      <h3 className="text-lg font-bold">{project.name}</h3>
      <p>{project.description}</p>
      <Link to={`/project/${project.id}`} className="text-blue-500">Ver detalles</Link>
    </div>
  );
};

export default ProjectCard;