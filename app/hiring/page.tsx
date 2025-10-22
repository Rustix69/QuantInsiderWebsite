"use client";

import ServicesTree from '@/app/components/ServiceTree';
import ShineBorder from '@/app/components/ui/shine-border';
import React from 'react';
import {
  Users,
  BrainCircuit,
  Target,
  Shield
} from 'lucide-react';
import { NeonGradientCard } from '@/app/components/ui/neon-gradient-card';

const Hiring = () => {
  const reasons = [
    {
      icon: <BrainCircuit className="w-12 h-12 text-blue-600" />,
      title: "Industry Expertise",
      description: "Leverage our deep understanding of quantitative finance to identify candidates with the right technical skills and market knowledge."
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Extensive Network",
      description: "Benefit from our vast network of industry professionals and emerging talent from top universities."
    },
    {
      icon: <Target className="w-12 h-12 text-blue-600" />,
      title: "Customized Approach",
      description: "Receive tailored hiring solutions that align with your firm's culture, strategy, and goals."
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Confidentiality and Compliance",
      description: "Trust our commitment to maintaining confidentiality and adhering to industry regulations throughout the hiring process."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className='mt-8 lg:mt-40 text-xl md:text-4xl lg:text-6xl gradient-title tracking-tighter font-extrabold flex flex-col justify-center items-center'>
        <div>Unlock Top Quant Talent with Quant Insider</div>
      </div>
      <p className='text-center text-xs lg:text-2xl font-serif font-extralight mt-2 lg:mt-10 tracking-tighter px-5 lg:px-20'>
        In the fast-paced world of finance, having the right talent can be the difference between leading the
        market and lagging behind. At Quant Insider, we specialize in connecting financial institutions with
        elite quant professionals. From hedge funds to high-frequency trading firms, investment banks
        to asset management firms, our deep understanding of the quant landscape allows us to source
        candidates who are not just qualified, but game-changers.
      </p>

      {/* Services */}
      <ServicesTree />

      {/* Our Expertise */}
      <div className='flex flex-col items-center mt-10 sm:mt-24'>
        <h1 className='text-center text-black text-2xl md:text-4xl lg:text-6xl tracking-tighter font-extrabold'>Our Expertise</h1>
        <div className='flex flex-col md:flex-row justify-between px-4 md:px-16 mt-5 gap-6 w-full'>
          <ShineBorder
            className="relative w-full md:w-1/6 flex h-auto flex-col py-10 items-start justify-start rounded-lg border bg-background md:shadow-xl"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-lg font-bold leading-none text-transparent">
              Quant Trader & Researcher
            </span>
            <div className='py-5 tracking-tighter font-serif text-base'>
              Identify and recruit traders and researchers skilled in leveraging mathematical models,
              algorithmic strategies, and statistical methods to enhance trading performance.
            </div>
          </ShineBorder>
          <ShineBorder
            className="relative w-full md:w-1/6 flex h-auto flex-col py-10 items-start justify-between rounded-lg border bg-background md:shadow-xl"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-lg font-bold leading-none text-transparent">
              Quant Developer
            </span>
            <div className='py-5 tracking-tighter font-serif text-base'>
              Connect with developers proficient in programming languages, data analysis, and
              algorithm development to support robust trading systems and platforms.
            </div>
          </ShineBorder>
          <ShineBorder
            className="relative w-full md:w-1/6 flex h-auto flex-col py-10 items-start justify-start rounded-lg border bg-background md:shadow-xl"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-lg font-bold leading-none text-transparent">
              Quant Analyst
            </span>
            <div className='py-5 tracking-tighter font-serif text-base'>
              Secure analysts who excel in data-driven insights, risk management, and strategy
              optimization.
            </div>
          </ShineBorder>
          <ShineBorder
            className="relative w-full md:w-1/6 flex h-auto flex-col py-10 items-start justify-start rounded-lg border bg-background md:shadow-xl"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-lg font-bold leading-none text-transparent">
              Portfolio Manager
            </span>
            <div className='py-5 tracking-tighter font-serif text-base'>
              Access experienced portfolio managers who combine quantitative analysis with market
              expertise to drive portfolio performance.
            </div>
          </ShineBorder>
          <ShineBorder
            className="relative w-full md:w-1/6 flex h-auto flex-col py-10 items-start justify-between rounded-lg border bg-background md:shadow-xl"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-lg font-bold leading-none text-transparent">
              Sell-Side Quants
            </span>
            <div className='py-5 tracking-tighter font-serif text-base'>
              Experts who develop pricing models, risk management solutions, and
              quantitative research to support trading desks and institutional clients.
            </div>
          </ShineBorder>
        </div>
      </div>

      {/* Target Talent Acquisition */}
      <div className="text-center text-black mt-20 px-5">
        <h1 className="text-2xl md:text-4xl lg:text-6xl tracking-tighter font-extrabold">
          Targeted Talent Acquisition
        </h1>

        <div className="flex flex-col md:flex-row justify-around px-4 md:px-10 w-full mt-5 gap-6">
          <NeonGradientCard className="w-full md:flex-1 min-w-[300px]">
            <h3 className="text-xl font-bold">Entry-Level Candidates</h3>
            <p className="text-base mt-2">
              Fresh minds with strong quantitative foundations, eager to innovate and learn within dynamic trading environments.
            </p>
          </NeonGradientCard>

          <NeonGradientCard className="w-full md:flex-1 min-w-[300px]">
            <h3 className="text-xl font-bold">Mid-Level Candidates</h3>
            <p className="text-base mt-2">
              Experienced professionals with a proven track record of success in quantitative finance, ready to take on leadership roles or specialized functions.
            </p>
          </NeonGradientCard>
        </div>
      </div>

      {/* Partner */}
      <div className='mt-20 px-4 md:px-20 mb-20'>
        <h1 className='text-center text-black text-2xl md:text-4xl lg:text-6xl tracking-tighter font-extrabold'>Why Partner with Quant Insider ?</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hiring;

