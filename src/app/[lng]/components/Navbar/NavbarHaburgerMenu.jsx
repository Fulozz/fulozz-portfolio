"use client"
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative md:hidden lg:hidden">
            <button
                className="text-gray-800 dark:text-white focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div
                className={`absolute top-0 right-0 w-full h-full dark:text-white text-gray-800 opacity-90 transition-opacity ${
                    isOpen ? 'block' : 'block'
                }`}
            >
                {/* Your menu items here */}
            </div>
        </div>
    );
};

export default HamburgerMenu;