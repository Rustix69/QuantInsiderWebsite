"use client";

import React from "react";
import { LayoutGrid } from "./ui/layout-grid";

export function AlgoLayout() {
    return (
        <div className="h-full px-2 sm:w-3/4">
            <LayoutGrid cards={cards} />
        </div>
    );
}

const SkeletonOne = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Odyssey (Marketplace)
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Discover proven quantitative strategies with our tool—designed to test and refine your trading ideas for optimal results.
            </p>
        </div>
    );
};

const SkeletonTwo = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Sign In
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Sign In our platform for free to implement our quant strategies in your trading. We support all Indian Brokers.
            </p>
        </div>
    );
};

const SkeletonThree = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Create Strategies with AI
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Leverage AI to create powerful, data-driven quant trading strategies tailored for success.
            </p>
        </div>
    );
};

const SkeletonFour = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Phoenix Copilot
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Supercharge your coding with Phoenix Copilot—seamlessly design and implement trading strategies directly in our terminal. Experience efficiency and precision like never before!
            </p>
        </div>
    );
};

const cards = [
    {
        id: 1,
        content: <SkeletonOne />,
        className: "md:col-span-2",
        thumbnail: "/tradingtool/tool1.png"
    },
    {
        id: 2,
        content: <SkeletonTwo />,
        className: "col-span-1",
        thumbnail: "/tradingtool/tool3.png"
    },
    {
        id: 3,
        content: <SkeletonThree />,
        className: "col-span-1",
        thumbnail: "/tradingtool/tool6.png"
    },
    {
        id: 4,
        content: <SkeletonFour />,
        className: "md:col-span-2",
        thumbnail: "/tradingtool/tool5.png"
    },
];

