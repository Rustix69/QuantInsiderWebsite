"use client";

import { motion } from "framer-motion";

const services = [
    "Hedge Funds",
    "Trading Firms",
    "High-Frequency Trading (HFT) Firms",
    "Investment Banks",
    "Investment Management Firms",
    "Asset Management Firms",
];

export default function ServicesTree() {
    return (
        <div className="flex flex-col items-center justify-center">
            <motion.div
                className='text-center text-black text-2xl mt-10 md:text-4xl lg:text-6xl tracking-tighter font-extrabold'
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                Our Services
            </motion.div>
            <p className='text-center text-xs lg:text-2xl font-serif font-extralight lg:mt-10 tracking-tighter px-5 lg:px-20'>We offer hiring services tailored to the unique needs of:</p>

            <div className="relative mt-5 flex flex-wrap justify-center gap-5 sm:gap-10 max-w-4xl">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="p-2 bg-transparent text-black font-serif text-xl rounded-lg border border-slate-950 shadow-md w-64 text-center justify-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.3 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div>
                            {service}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

