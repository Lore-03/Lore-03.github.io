import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../AppContext';

function ProjectDetailPage() {
  const { id } = useParams();
  const { projects } = useContext(AppContext);
  const project = projects.find((p) => p.id === parseInt(id));

  return (
    <div className="project-detail-page">
      <h1>{project?.name}</h1>
      <h2>Historias de Usuario</h2>
      <ul>
        <li>Historia 1</li>
        <li>Historia 2</li>
        <li>Historia 3</li>
      </ul>
    </div>
  );
}

export default ProjectDetailPage;
