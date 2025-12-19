import React from 'react';

interface TeamCardProps {
  image: string;
  name: string;
  role: string;
  description: string;
  imageSize?: 'full' | 'small';
}

const TeamCard: React.FC<TeamCardProps> = ({ image, name, role, description, imageSize = 'full' }) => {
  return (
    <div className="team-card w-full h-full transform transition duration-300 hover:shadow-lg">
      <div className="card-content h-full flex flex-col relative bg-white/40 backdrop-blur-md rounded-xl shadow-sm border border-gray-200/50 overflow-hidden hover:border-gray-300/50 transition-colors">
        <div className="overflow-hidden aspect-square flex items-center justify-center bg-transparent">
          <img
            src={image}
            alt={name}
            className={`${imageSize === 'small' ? 'w-3/4 h-3/4 rounded-full shadow-md' : 'w-full h-full'} object-cover object-center transition-transform duration-500 hover:scale-105`}
          />
        </div>
        <div className="p-5 text-center flex-grow flex flex-col">
          <h2 className="card-title text-xl font-bold text-gray-900 mb-1">{name}</h2>
          <h3 className="card-role text-sm font-medium text-gray-600 mb-3 uppercase tracking-wide">{role}</h3>
          <div className="w-12 h-0.5 bg-gray-400/30 mx-auto mb-4 rounded-full"></div>
          <p className="card-description text-gray-800 text-sm leading-relaxed whitespace-pre-line font-light flex-grow">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
