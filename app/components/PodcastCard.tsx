import React from 'react';
import Link from 'next/link';

interface Podcast {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  playLink: string;
  type: string;
}

interface PodcastCardProps {
  podcast: Podcast;
}

const PodcastCard: React.FC<PodcastCardProps> = ({ podcast }) => {
  return (
    <div className="relative w-full rounded-xl overflow-hidden border border-black shadow-md bg-transparent transition-all duration-300 hover:shadow-lg group mb-8">
      <div className="flex flex-col md:flex-row">
        {/* Content - 70% width on desktop */}
        <div className="p-4 md:p-8 bg-white/10 backdrop-blur-sm md:w-[70%] flex flex-col justify-center order-2 md:order-1">
          <h3 className="text-xl md:text-3xl font-bold text-black mb-3">{podcast.title}</h3>
          <p className="text-sm md:text-base text-gray-800 pl-4 border-l-2 border-gray-400 italic">
            {podcast.description}
          </p>
        </div>
        
        {/* Thumbnail - 30% width on desktop */}
        <div className="relative w-full md:w-[30%] h-56 md:h-auto overflow-hidden order-1 md:order-2">
          <img 
            src={podcast.thumbnailUrl} 
            alt={podcast.title} 
            className="w-full h-full object-cover"
          />
          
          {/* Play Button - positioned on the thumbnail */}
          <div className="absolute bottom-4 right-4">
            <Link 
              href={podcast.playLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 rounded-full bg-black text-white shadow-md"
              aria-label={`Play ${podcast.title}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastCard;

