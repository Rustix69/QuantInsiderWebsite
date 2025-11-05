"use client";

import React, { useState } from 'react';
import BlurIn from '@/app/components/ui/blur-in';
import TypingAnimation from '@/app/components/ui/typing-animation';
import PodcastCard from '@/app/components/PodcastCard';
import podcastsData from '@/app/data/podcasts.json';

const Talks = () => {
  const [activeFilter, setActiveFilter] = useState('');
  
  // Filter podcasts based on selected type
  const filteredPodcasts = podcastsData.filter(podcast => 
    activeFilter === '' || activeFilter === 'all' || podcast.type === activeFilter
  );

  return (
    <div>
      <div className='mt-10 sm:mt-20 px-5 sm:px-10' id='top'>
        <BlurIn
          word="PODCASTS"
          duration={1}
          variant={{
            hidden: { filter: "blur(10px)", opacity: 0 },
            visible: { filter: "blur(0px)", opacity: 1 },
          }}
          className="text-center sm:text-start gradient-title-2 font-extrabold tracking-tighter"
        />
        <TypingAnimation 
          duration={70} 
          className='text-center sm:text-start text-base md:text-4xl tracking-tighter font-semibold py-2'
        >
          Insights and discussions on quantitative finance and trading
        </TypingAnimation>
      </div>
      
      <div className="px-5 sm:px-10 py-8">
        <p className="text-lg text-center sm:text-left mb-10">
          Join us for in-depth conversations with industry experts, exploring the latest trends, strategies, and innovations in quantitative finance.
        </p>
        
        {/* Filter Dropdown with Enhanced Blur Animation */}
        <div className="flex justify-center gap-4 mb-12 px-10 sm:px-10 relative">
          {/* Decorative Blobs for Animation */}
          <div className="absolute -z-10 top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute -z-10 top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-green-500/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
          
          <div className="relative w-64">
            <select 
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
              className="appearance-none w-full px-4 py-3 rounded-lg font-medium transition-all duration-300 backdrop-blur-md shadow-lg border border-black z-10 
              bg-white/10 text-black hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-black pr-10"
            >
              <option value="" disabled hidden>Select Content Type</option>
              <option value="all">All</option>
              <option value="seminar">Webinars</option>
              <option value="podcast">Podcasts</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Podcast List - full width container */}
        <div className="w-full">
          {[...filteredPodcasts].sort((a, b) => b.id - a.id).map((podcast) => (
            <PodcastCard key={podcast.id} podcast={podcast} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Talks;

