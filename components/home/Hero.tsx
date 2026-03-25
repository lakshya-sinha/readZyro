"use client";

import Image from "next/image";
import { SearchIcon } from "lucide-react";
import { motion } from "motion/react";

export default function Component() {
    const popular = ["Business", "Technology", "Self Help", "Finance", "Marketing"];

    return (
        <main className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 w-full px-6 md:px-16 lg:px-24 py-10 border-b border-gray-100 bg-gradient-to-br from-white via-blue-50/30 to-white">

            {/* Left */}
            <motion.div
                className="flex flex-col gap-5 max-w-xl w-full text-center md:text-left"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.1 } },
                }}
            >
                {/* Badge */}
                <motion.span
                    className="inline-flex self-center md:self-start items-center gap-1.5 text-xs font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full w-fit"
                    variants={{
                        hidden: { opacity: 0, y: -10 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                    }}
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    10,000+ eBooks available
                </motion.span>

                {/* Heading */}
                <motion.h1
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}
                >
                    Discover Knowledge, <br />
                    Read{" "}
                    <span className="text-blue-800 relative inline-block">
                        Great eBooks
                        <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                            <path d="M0 6 Q50 0 100 4 Q150 8 200 3" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.4"/>
                        </svg>
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="text-base sm:text-lg text-gray-500 leading-relaxed"
                    variants={{
                        hidden: { opacity: 0, y: 16 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}
                >
                    Explore thousands of ebooks from expert authors worldwide.{" "}
                    <span className="text-gray-700 font-medium">Search, buy, and download instantly.</span>
                </motion.p>

                {/* Search */}
                <motion.div
                    className="flex items-center border border-gray-200 rounded-xl shadow-sm bg-white overflow-hidden focus-within:ring-2 focus-within:ring-blue-500/30 focus-within:border-blue-400 transition-all duration-200"
                    variants={{
                        hidden: { opacity: 0, y: 16 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}
                    whileFocus={{ scale: 1.01 }}
                >
                    <input
                        type="text"
                        placeholder="Search books, authors, topics..."
                        className="w-full px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none bg-transparent"
                    />
                    <motion.button
                        className="flex items-center gap-2 bg-blue-800 hover:bg-blue-700 transition-colors duration-200 text-white text-sm font-medium px-4 py-3 m-1.5 rounded-lg cursor-pointer shrink-0"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                    >
                        <SearchIcon size={16} />
                        <span className="hidden sm:inline">Search</span>
                    </motion.button>
                </motion.div>

                {/* Popular tags */}
                <motion.div
                    className="flex flex-wrap items-center gap-2 justify-center md:justify-start"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.07, delayChildren: 0.05 },
                        },
                    }}
                >
                    <span className="text-sm text-gray-400 font-medium">Popular:</span>
                    {popular.map((tag, i) => (
                        <motion.button
                            key={i}
                            className="text-xs font-medium bg-gray-100 hover:bg-blue-100 hover:text-blue-700 text-gray-600 px-3 py-1.5 rounded-full transition-colors duration-200 cursor-pointer"
                            variants={{
                                hidden: { opacity: 0, scale: 0.85 },
                                visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
                            }}
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.94 }}
                        >
                            {tag}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Stats */}
                <motion.div
                    className="flex gap-6 justify-center md:justify-start pt-1"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.1, delayChildren: 0.1 },
                        },
                    }}
                >
                    {[["50K+", "Readers"], ["10K+", "eBooks"], ["500+", "Authors"]].map(([num, label]) => (
                        <motion.div
                            key={label}
                            className="text-center md:text-left"
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                            }}
                        >
                            <p className="text-lg font-bold text-gray-900">{num}</p>
                            <p className="text-xs text-gray-400">{label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Right — image */}
            <motion.div
                className="relative shrink-0"
                initial={{ opacity: 0, x: 40, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ scale: 1.03, rotate: 1 }}
            >
                <div className="absolute inset-0 bg-blue-100/50 rounded-3xl blur-3xl scale-90 -z-10" />
                <Image
                    src="/herobooks.png"
                    width={520}
                    height={560}
                    alt="Hero books illustration"
                    className="w-[280px] sm:w-[380px] lg:w-[520px] h-auto drop-shadow-xl"
                    priority
                />
            </motion.div>
        </main>
    );
}