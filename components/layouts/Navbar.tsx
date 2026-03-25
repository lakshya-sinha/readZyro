'use client'
import Image from "next/image";
import Link from "next/link";
import { ShoppingCartIcon, SearchIcon, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Component() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/browse", label: "Browse Books" },
        { href: "/categories", label: "Categories", icon: <ChevronDown size={15} className="text-gray-400 mt-0.5" /> },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header className="w-full border-b border-gray-100 bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
            <nav className="flex items-center justify-between w-full px-5 md:px-10 h-16">

                {/* Logo */}
                <div className="shrink-0">
                    <Image src="/logo_removed.png" width={140} height={140} alt="Logo" className="h-10 w-auto object-contain" />
                </div>

                {/* Desktop nav links */}
                <div className="hidden lg:flex items-center gap-1 h-full">
                    {navLinks.map(({ href, label, icon }) => (
                        <Link
                            key={href}
                            href={href}
                            className="flex items-center gap-0.5 text-sm text-gray-600 hover:text-blue-700 font-medium px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-all duration-200"
                        >
                            {label}
                            {icon}
                        </Link>
                    ))}
                </div>

                {/* Desktop search */}
                <div className="hidden md:flex items-center border border-gray-200 rounded-xl overflow-hidden bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500/30 focus-within:border-blue-400 transition-all duration-200">
                    <SearchIcon size={15} className="text-gray-400 ml-3 shrink-0" />
                    <input
                        type="text"
                        className="px-2 py-2 text-sm bg-transparent focus:outline-none placeholder-gray-400 w-44 lg:w-56"
                        placeholder="Search books, authors..."
                    />
                    <button className="px-3 py-2 bg-blue-700 hover:bg-blue-600 text-white text-sm font-medium transition-colors duration-200 cursor-pointer">
                        Search
                    </button>
                </div>

                {/* Desktop actions */}
                <div className="hidden md:flex items-center gap-2">
                    <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                        <ShoppingCartIcon size={20} className="text-gray-500" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-blue-600 rounded-full" />
                    </button>
                    <Link
                        href="/login"
                        className="text-sm font-medium text-gray-700 border border-gray-200 px-4 py-1.5 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                    >
                        Login
                    </Link>
                    <Link
                        href="/sselling"
                        className="text-sm font-medium bg-blue-950 hover:bg-blue-900 text-white px-4 py-1.5 rounded-xl transition-colors duration-200"
                    >
                        Start Selling
                    </Link>
                </div>

                {/* Mobile: cart + hamburger */}
                <div className="flex md:hidden items-center gap-2">
                    <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
                        <ShoppingCartIcon size={20} className="text-gray-500" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-blue-600 rounded-full" />
                    </button>
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                        {mobileOpen ? <X size={20} className="text-gray-600" /> : <Menu size={20} className="text-gray-600" />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="md:hidden border-t border-gray-100 bg-white px-5 py-4 flex flex-col gap-3 shadow-lg">
                    {/* Mobile search */}
                    <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500/30 transition-all">
                        <SearchIcon size={15} className="text-gray-400 ml-3 shrink-0" />
                        <input
                            type="text"
                            className="px-2 py-2 text-sm bg-transparent focus:outline-none placeholder-gray-400 w-full"
                            placeholder="Search books, authors..."
                        />
                        <button className="px-3 py-2 bg-blue-700 text-white text-sm font-medium cursor-pointer">
                            Search
                        </button>
                    </div>

                    {/* Mobile nav links */}
                    {navLinks.map(({ href, label, icon }) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-700 py-2 border-b border-gray-50 transition-colors"
                        >
                            {label}{icon}
                        </Link>
                    ))}

                    {/* Mobile actions */}
                    <div className="flex gap-2 pt-1">
                        <Link href="/login" className="flex-1 text-center text-sm font-medium border border-gray-200 px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">
                            Login
                        </Link>
                        <Link href="/sselling" className="flex-1 text-center text-sm font-medium bg-blue-950 text-white px-4 py-2 rounded-xl hover:bg-blue-900 transition-colors">
                            Start Selling
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}