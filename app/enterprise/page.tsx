"use client";

import { AlgoLayout } from '@/app/components/AlgoLayout';
import { RequestForm } from '@/app/components/RequestDemo';
import BlurIn from '@/app/components/ui/blur-in';
import InteractiveHoverButton from '@/app/components/ui/interactive-hover-button';
import LetterPullup from '@/app/components/ui/letter-pullup';
import Meteors from '@/app/components/ui/meteors';
import ShineBorder from '@/app/components/ui/shine-border';
import TypingAnimation from '@/app/components/ui/typing-animation';
import React from 'react';

const Enterprise = () => {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const array = [
    {
      logo: "/enterprise/top/ai.png",
      text: "Generative AI"
    }, {
      logo: "/enterprise/top/analytics.png",
      text: "Backoffice Analytics"
    }, {
      logo: "/enterprise/top/cross.png",
      text: "Any Market, Any Broker"
    }, {
      logo: "/enterprise/top/cloud.png",
      text: "Any Platform, Any Cloud"
    }, {
      logo: "/enterprise/top/code.png",
      text: "Trusted & Maintained Code"
    }
  ];

  return (
    <div>
      <div className='mt-10 sm:mt-20 px-5 sm:px-10'>
        <BlurIn
          word="Enterprise"
          duration={1}
          className="text-center sm:text-start gradient-title-2 font-extrabold tracking-tighter"
        />
        <TypingAnimation className='text-center sm:text-start text-base md:text-4xl tracking-tighter font-semibold py-2'>Gen AI powered Hedge Fund in a Box</TypingAnimation>
        <div>
          <div className='w-full flex flex-col sm:flex-row py-5'>
            <div className="flex flex-col w-full sm:w-1/4 gap-4 p-4">
              {array.map((feat, index) => (
                <div
                  key={index}
                  className="bg-white p-3 flex justify-start gap-2 items-center rounded-md shadow-md"
                >
                  <img src={feat.logo} className='sm:h-10 h-6' />
                  <h1 className="sm:text-xl text-base font-bold text-gray-800">{feat.text}</h1>
                </div>
              ))}
              <button onClick={() => scrollToSection("request-demo")}>
                <InteractiveHoverButton text="Request Demo"/>
              </button>
            </div>

            <AlgoLayout />
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <LetterPullup words={"Use Cases"} delay={0.05} className="text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter py-5" />
      <div className='flex flex-col sm:flex-row justify-between gap-5 px-5'>
        <ShineBorder
          className="relative flex h-auto flex-col py-10 items-start justify-between rounded-lg border bg-background md:shadow-xl"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-xl font-bold leading-none text-transparent">
            ARE YOU A BROKING HOUSE LOOKING TO TRANSFORM YOUR
            TRADING OFFERINGS WITH SEBI COMPLIANT ALGO SETUP?
          </span>
          <div className='py-5 tracking-tighter font-serif text-base'>
            Empower both retail and institutional clients with cutting-edge algorithmic trading solutions.<br />
            • Whitelabel: Get an Algo platform with your branding & inventory.<br />
            • Boost Engagement: See up to 25% increase in client activity.<br />
            • Grow Revenue: See up to 35% growth in brokerages.<br />
            • AI Offerings: AI-driven strategies tailored for new opportunities.
          </div>
          <div className='tracking-tighter font-serif text-base'>
            <h1>Solutions:</h1>
            <h1>Odyssey for Retail | Phoenix Suite for Institutions | Whitelabel</h1>
          </div>
        </ShineBorder>
        <ShineBorder
          className="relative flex h-auto flex-col py-10 items-start justify-between rounded-lg border bg-background md:shadow-xl"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-xl font-bold leading-none text-transparent">
            ARE YOU A FINTECH STARTUPS LOOKING TO ACCELERATE
            YOUR PLATFORM LAUNCH ?
          </span>
          <div className='py-5 tracking-tighter font-serif text-base'>
            <div>
              Launch AI-powered trading platforms effortlessly—even without quant expertise.<br />
              • Instant Launch: Go live with a full-fledged platform in less than 1 month.<br />
              • AI offerings: 35% rise in user engagement with AI offerings.<br />
              • Scale Rapidly: Onboard thousands of users in less than 1 quarter.<br />
              • 100% Support: We provide complete support from start to end.<br />
            </div>
          </div>

          <div className='tracking-tighter font-serif text-base'>
            <h1>Solutions:</h1>
            <h1>Odyssey for Retail | Phoenix Suite for Institutions | Whitelabel</h1>
          </div>
        </ShineBorder>
        <ShineBorder
          className="relative flex h-auto flex-col py-10 items-start justify-between rounded-lg border bg-background md:shadow-xl"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-xl font-bold leading-none text-transparent">
            ARE YOU AN RA/RIA LOOKING TO AUTOMATED YOUR SETUP
            AND MANAGE MORE CLIENTS SEEMLESSLY ?
          </span>
          <div className='py-5 tracking-tighter font-serif text-base'>
            <div>
              Deliver custom algorithmic strategies to retain clients and boost portfolio performance.<br />
              • Full Automation: 100% automation of all investment strategies.<br />
              • Backoffice: Easily manage client activity in a single view.<br />
              • Increase AUM: 10x growth in managed assets with the same size team.<br />
            </div>
          </div>
          <div className='tracking-tighter font-serif text-base'>
            <h1>Solutions:</h1>
            <h1>Phoenix Pro Build for Customization | Enterprise Setup | Backoffice</h1>
          </div>
        </ShineBorder>
      </div>

      {/* Benefits */}
      <LetterPullup words={"Benefits"} delay={0.05} className="text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mt-10 sm:mt-20" />
      <div className='flex sm:flex-row flex-col justify-between gap-5 px-5 mt-5'>
        <div className="py-5 relative first:h-[25vh] flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
          <div
            className="absolute top-[35%] sm:top-[40%] flex justify-center items-center"
            style={{
              backgroundImage: 'url("/enterprise/icons/automation.png")',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              height: '50%',
              width: '100%',
              opacity: '15%'
            }}
          ></div>
          <Meteors number={50} />
          <h1 className='text-xl font-extrabold font-serif'>Automation & Efficiency</h1>
          <p className='text-base px-5 text-center font-semibold mt-3'>Streamline trading operations, reduce manual processes, and
            ensure rapid strategy deployment with trusted & maintained
            code.</p>
        </div>
        <div className="py-5 relative first:h-[25vh] flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
          <div
            className="absolute top-[35%] sm:top-[40%] flex justify-center items-center"
            style={{
              backgroundImage: 'url("/enterprise/icons/customize.png")',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              height: '50%',
              width: '100%',
              opacity: '15%'
            }}
          ></div>
          <Meteors number={50} />
          <h1 className='text-xl font-extrabold font-serif'>Customisation</h1>
          <p className='text-base px-5 text-center font-semibold mt-3'>Tailor strategies to match your specific goals, risk tolerance,
            and market insights using Generative AI and a fully
            customisable platform.</p>
        </div>
        <div className="py-5 relative first:h-[25vh] flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
          <div
            className="absolute top-[35%] sm:top-[40%] flex justify-center items-center"
            style={{
              backgroundImage: 'url("/enterprise/icons/grow.png")',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              height: '50%',
              width: '100%',
              opacity: '15%'
            }}
          ></div>
          <Meteors number={50} />
          <h1 className='text-xl font-extrabold font-serif'>Scalability</h1>
          <p className='text-base font-semibold px-5 text-center mt-3'>Effortlessly scale your trading systems across any platform or
            cloud, with full flexibility to operate in any market and with any
            broker, ensuring global reach.</p>
        </div>
        <div className="py-5 relative first:h-[25vh] flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
          <div
            className="absolute top-[35%] sm:top-[40%] flex justify-center items-center"
            style={{
              backgroundImage: 'url("/enterprise/icons/data.png")',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              height: '50%',
              width: '100%',
              opacity: '15%'
            }}
          ></div>
          <Meteors number={50} />
          <h1 className='text-xl font-extrabold font-serif'>Data Driven Performance</h1>
          <p className='text-base font-semibold px-5 text-center mt-3'>Access detailed back-office analytics for real-time insights
            into customer data, portfolio performance, risk management,
            and more.</p>
        </div>
      </div>

      {/* Key Offerings */}
      <LetterPullup words={"Key Offerings"} delay={0.05} className="text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mt-10 sm:mt-20" />
      <div className='flex sm:flex-row flex-col justify-between gap-5 px-5 mt-5'>
        <div className="py-5 relative first:h-[35vh] sm:first:h-[25vh] flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
          <div
            className="absolute top-[25%] sm:top-[35%] flex justify-center items-center"
            style={{
              backgroundImage: 'url("/enterprise/icons/strategy.png")',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              height: '50%',
              width: '100%',
              opacity: '15%'
            }}
          ></div>
          <Meteors number={50} />
          <h1 className='text-xl font-extrabold font-serif'>Odessy: Ready to use Strategy</h1>
          <p className='text-base font-semibold px-5 text-center mt-3'>Instant access to a diverse marketplace of pre-built
            strategies. Perfect
            for enterprises seeking quick deployment and
            reliable performance across equities, futures, and
            more.</p>
        </div>
        <div
          className="py-5 relative first:h-[25vh] flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
        >
          <div
            className="absolute top-[25%] sm:top-[35%] flex justify-center items-center"
            style={{
              backgroundImage: 'url("/enterprise/icons/ai.png")',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              height: '50%',
              width: '100%',
              opacity: '15%'
            }}
          ></div>
          <Meteors number={50} />
          <h1 className="text-xl font-extrabold font-serif z-10">Generative AI</h1>
          <p className="text-base font-semibold px-5 text-center mt-3 z-10">
            Utilise Generative AI capabilities to automatically
            generate trading strategies based on large
            datasets, historical patterns, and market trends,
            further accelerating the strategy development
            process.
          </p>
        </div>

        <div className="py-5 relative first:h-[25vh] flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
          <div
            className="absolute top-[25%] sm:top-[35%] flex justify-center items-center"
            style={{
              backgroundImage: 'url("/enterprise/icons/code.png")',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              height: '50%',
              width: '100%',
              opacity: '15%'
            }}
          ></div>
          <Meteors number={50} />
          <h1 className='text-xl font-extrabold font-serif'>Trusted & Maintained Code</h1>
          <p className='text-base font-semibold px-5 text-center mt-3'>Our codebase is continually maintained and
            updated by a team of experts, ensuring your
            algorithms are reliable, secure, and optimised for
            performance.</p>
        </div>
        <div className="py-5 relative first:h-[25vh] flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
          <div
            className="absolute top-[25%] sm:top-[35%] flex justify-center items-center"
            style={{
              backgroundImage: 'url("/enterprise/icons/copilot.png")',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              height: '50%',
              width: '100%',
              opacity: '15%'
            }}
          ></div>
          <Meteors number={50} />
          <h1 className='text-xl font-extrabold font-serif'>Phoenix Suit</h1>
          <p className='text-base font-semibold px-5 text-center mt-3'><b>Phoenix Copilot:</b> Describe your strategy in plain English or Hinglish*, and let AI code it for you. <b>Phoenix Pro & Python Build:</b> Choose tailored strategies by quants or <b>DIY Python-based development</b> for full control.</p>
        </div>
      </div>

      <div className="flex items-center justify-center mt-16">
        <div className="flex items-center justify-center gap-2 sm:gap-4 p-4 rounded-2xl bg-white/20 backdrop-blur-lg shadow-lg">
          <span className="text-black text-4xl sm:text-5xl font-bold">Tech Partner</span>
          <img
            src="/enterprise/algobulls.png"
            alt="Partner logo"
            className="w-32 sm:w-40 h-32 sm:h-40 mt-1 object-contain rounded"
          />
        </div>
      </div>

      <div className='flex flex-col items-center justify-center item-centre px-3 mt-10 sm:mt-16 mb-10' id="request-demo">
        <h1 className='text-center text-black text-4xl md:text-5xl lg:text-6xl tracking-tighter font-extrabold p-4'>Request Demo</h1>
        <RequestForm />
      </div>
    </div>
  );
};

export default Enterprise;

