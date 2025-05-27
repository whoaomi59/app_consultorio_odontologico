import React from 'react';

const TeamMemberCard = ({ name, role, image, bio }) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img className="h-16 w-16 rounded-full" src={image} alt={name} />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">{name}</h3>
            <p className="text-gray-500">{role}</p>
          </div>
        </div>
        <button 
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-500"
        >
          {expanded ? 'Ver menos' : 'Ver más'}
        </button>
        {expanded && <p className="mt-2 text-gray-600">{bio}</p>}
      </div>
    </div>
  );
};

export default TeamMemberCard;