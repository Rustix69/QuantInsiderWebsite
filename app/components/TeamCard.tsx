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
    <div className="team-card w-full transform transition duration-300 hover:scale-102 hover:shadow-xl">
      <div className="card-content relative backdrop-blur-lg rounded-xl shadow-lg border border-gray-200 overflow-hidden animate-fade-in-bounce hover:border-indigo-300">
        <div className="overflow-hidden aspect-square flex items-center justify-center">
          <img
            src={image}
            alt={name}
            className={`${imageSize === 'small' ? 'w-3/4 h-3/4' : 'w-full h-full'} object-cover object-center transition-transform duration-500 hover:scale-105`}
          />
        </div>
        <div className="p-6 text-center bg-white bg-opacity-90">
          <h2 className="card-title text-2xl font-extrabold text-indigo-900 font-serif mb-1">{name}</h2>
          <h3 className="card-role text-lg font-medium text-indigo-600 mb-3 font-sans">{role}</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-4 rounded-full"></div>
          <p className="card-description text-gray-700 mb-4 leading-relaxed whitespace-pre-line font-light">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;

