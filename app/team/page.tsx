"use client";

import React from 'react';
import TeamCard from '@/app/components/TeamCard';
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
    },
    {
      image: "/teams/nick.png",
      name: "Dr. Nick Firoozye",
      role: "Instructor",
      description: "Dr. Nick Firoozye is a mathematician with over 20 years of experience in the Quant finance industry, spanning both buy-side and sell-side firms. He began his career at Lehman Brothers, where he worked on MBS/ABS modeling and later moved into senior roles in Quant Research and Strategy at Goldman Sachs and Deutsche Bank. His expertise also extended to asset management and hedge funds, with positions at Sanford Bernstein, Citadel, and Exodus Point, focusing on areas such as Quantitative Strategy, Relative Value Trading, and Asset Allocation."
    }
  ];

  return (
    <div className="flex flex-col items-center min-h-screen pb-20">
      
      {/* Simple Header */}
      <div className="w-full text-center pt-24 pb-12 px-5">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
          Our Team
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 font-light">
          Meet the experts, developers, and industry veterans dedicated to revolutionizing algorithmic trading.
        </p>
      </div>

      <div className="container mx-auto px-5 max-w-6xl space-y-20">
        
        {/* Leadership Team */}
        <div>
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8 tracking-tight">Leadership</h2>
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              {leadershipTeam.map((member, index) => (
                <TeamCard
                  key={index}
                  image={member.image}
                  name={member.name}
                  role={member.role}
                  description={member.description}
                  imageSize="small"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Advisory Board */}
        <div>
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8 tracking-tight">Advisory Board</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        <div>
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8 tracking-tight">Core Team & Faculty</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      </div>
    </div>
  );
};

export default Team;
