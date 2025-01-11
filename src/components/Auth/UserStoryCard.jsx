import React from 'react';

const UserStoryCard = ({ story }) => {
  return (
    <div className="border p-4 mb-4">
      <h4 className="font-semibold">{story.title}</h4>
      <p>{story.description}</p>
    </div>
  );
};

export default UserStoryCard;