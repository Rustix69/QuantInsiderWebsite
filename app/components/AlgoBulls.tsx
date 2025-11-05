"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import Link from "next/link";

export function AlgoBulls() {
    const images = [
        {
            src: "/tradingtool/tool1.png",
            alt: "Algorithmic trading strategies dashboard with real-time market analysis"
        },
        {
            src: "/tradingtool/tool4.png",
            alt: "Auto-connect trading strategies to Zerodha and broker accounts"
        },
        {
            src: "/tradingtool/tool2.png",
            alt: "Automated trading platform with strategy marketplace"
        },
        {
            src: "/tradingtool/tool3.png",
            alt: "Real-time algo trading execution and portfolio management"
        },
        {
            src: "/tradingtool/tool4.png",
            alt: "Connect and deploy trading strategies with broker integration"
        },
        {
            src: "/tradingtool/tool5.png",
            alt: "Advanced algorithmic trading tools and strategy backtesting"
        },
    ];
    
    return (
        <ImagesSlider className="h-[25rem] sm:h-[50rem] w-auto rounded-xl" images={images}>
            <motion.div
                initial={{
                    opacity: 0,
                    y: -80,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-center"
            >
                <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                    Explore Our Algo Trading Tools
                </motion.p>
                <Link href="https://quantinsider.algobulls.com/phoenix/splash" target="_blank">
                    <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                        <span>Explore Our Algorithmic Trading Platform →</span>
                        <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                    </button>
                </Link>
            </motion.div>
        </ImagesSlider>
    );
}

