"use client";

import React from 'react';
import TeamCard from '@/app/components/TeamCard';
import GradualSpacing from '@/app/components/ui/gradual-spacing';
import { useRouter } from 'next/navigation';

const Team = () => {
  const router = useRouter();

  // Actual team data with real information
  const leadershipTeam = [
    {
      image: "/teams/tribhuvan.jpeg",
      name: "Tribhuvan Bisen",
      role: "Founder & CEO",
      description: "Tribhuvan holds a Bachelor's degree in Finance from Christ University and FRM Level 1 certification. With expertise in Python programming, financial analytics, and algorithmic trading, he's passionate about democratizing access to advanced education. Former Deutsche Bank professional who has mentored over a thousand individuals."
    }
  ];

  const advisoryBoard = [
    {
      image: "/teams/robert.jpeg",
      name: "Robert Navin",
      role: "Advisor",
      description: "Founder and CEO of Real Time Risk Systems LLC. Co-founded an alternative asset management fund that expanded from $150M to $1.1B. Former head of quantitative analysis at Highbridge Capital Management and O'Connor risk group at Swiss Bank (now UBS)."
    },
    {
      image: "/teams/kris.jpg",
      name: "Kristopher Abdelmessih",
      role: "Advisor",
      description: "Co-Founder and CEO of Moontower.ai, an options analytics platform. Former trader at Susquehanna International Group (SIG). Over 20 years of institutional trading experience with memberships on AMEX, NYMEX, COMEX, ICE/NYBOT, and NYSE."
    },
    {
      image: "/teams/monish.jpeg",
      name: "Monish Shah",
      role: "Advisor",
      description: "Internationally acclaimed ETF Trader with 15+ years of experience on Wall Street. Held leadership positions at KCG, Goldman Sachs, and Mizuho Securities. Recognized by the U.S. Government and profiled in The New York Times as the face of a 'new breed of Wall Street trader'."
    }
  ];

  const coreTeam = [
    {
      image: "/teams/parth.png",
      name: "Parth Bhanushali, CQF",
      role: "Team Member",
      description: "Holder of the Certificate in Quantitative Finance (CQF) with a strong foundation in both traditional and quantitative finance. A commerce graduate and CFA Level 2 cleared, his journey into quantitative finance began with the CQF."
    },
    {
      image: "/teams/nisha.jpeg",
      name: "Dr. Nisha Godani",
      role: "Faculty",
      description: "Assistant professor at Medicaps University with a PhD in mathematics from Dayalbagh Educational Institute. Specializes in Non-Manifold Topologies on Lorentz Manifolds with 50+ research papers. Has 8+ years of teaching experience and qualified for NET and GATE examinations with All India rank 40 and 90 respectively."
    }
  ];

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
      {/* Team Hero Section */}
      <div className="w-full bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-800 text-white py-16 md:py-24 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute transform -rotate-12 -translate-y-1/2 -translate-x-1/4 left-0 top-0 w-full h-full bg-indigo-700 opacity-10"></div>
          <div className="absolute transform rotate-12 translate-y-1/2 translate-x-1/4 right-0 bottom-0 w-full h-full bg-blue-700 opacity-10"></div>
        </div>
        <div className="container mx-auto px-5 sm:px-16 relative z-10">
          <div className="text-center mb-12">
            <h4 className="font-mono text-indigo-300 tracking-widest mb-2">MEET THE EXPERTS</h4>
            <h1 className="text-5xl md:text-7xl font-extrabold font-serif tracking-tight mb-6">
              Our <span className="text-indigo-400">Team</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto mb-8 rounded-full"></div>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-indigo-100 leading-relaxed font-light">
              At Quant Insider, we've assembled a world-class team of quantitative finance experts, 
              developers, and industry veterans dedicated to revolutionizing algorithmic trading.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full py-8 bg-white">
        <div className="container mx-auto grid grid-cols-3 gap-4 px-6">
          <div className="text-center p-4">
            <h3 className="text-4xl font-bold text-indigo-600 mb-2">5000+</h3>
            <p className="text-gray-600 font-medium">Mentored Individuals</p>
          </div>
          <div className="text-center p-4">
            <h3 className="text-4xl font-bold text-indigo-600 mb-2">15+</h3>
            <p className="text-gray-600 font-medium">Years Experience</p>
          </div>
          <div className="text-center p-4">
            <h3 className="text-4xl font-bold text-indigo-600 mb-2">6+</h3>
            <p className="text-gray-600 font-medium">Premier Institutions</p>
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="w-full px-5 sm:px-16 mt-16">
        <GradualSpacing
          className="text-center text-3xl font-extrabold tracking-tighter text-indigo-800 md:text-6xl font-serif mb-4"
          text="Leadership"
        />
        <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
        <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
          {leadershipTeam.map((member, index) => (
            <div key={index} className="max-w-xl mx-auto">
              <TeamCard
                image={member.image}
                name={member.name}
                role={member.role}
                description={member.description}
                imageSize="small"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Advisory Board */}
      <div className="w-full px-5 sm:px-16 mt-24">
        <GradualSpacing
          className="text-center text-3xl font-extrabold tracking-tighter text-indigo-800 md:text-6xl font-serif mb-4"
          text="Advisory Board"
        />
        <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {advisoryBoard.map((member, index) => (
            <TeamCard
              key={index}
              image={member.image}
              name={member.name}
              role={member.role}
              description={member.description}
            />
          ))}
        </div>
      </div>

      {/* Core Team */}
      <div className="w-full px-5 sm:px-16 mt-24 mb-24">
        <GradualSpacing
          className="text-center text-3xl font-extrabold tracking-tighter text-indigo-800 md:text-6xl font-serif mb-4"
          text="Core Team"
        />
        <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {coreTeam.map((member, index) => (
            <TeamCard
              key={index}
              image={member.image}
              name={member.name}
              role={member.role}
              description={member.description}
            />
          ))}
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="w-full bg-gradient-to-r from-indigo-900 to-purple-900 py-12 text-white">
        <div className="container mx-auto text-center px-5">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-serif">Join Our Vibrant Ecosystem</h2>
          <p className="max-w-2xl mx-auto text-indigo-100 mb-6">
            Become part of Quant Insider's mission to democratize access to advanced education, 
            Algo trading technologies, and one-on-one mentorship in quantitative finance.
          </p>
          <button 
            onClick={() => router.push('/#contact-us')} 
            className="px-8 py-3 bg-white text-indigo-900 font-semibold rounded-full hover:bg-indigo-100 transition duration-300"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;

