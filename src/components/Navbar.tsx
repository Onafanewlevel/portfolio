'use client';

import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-foreground bg-opacity-90 backdrop-blur-lg rounded-full shadow-xl z-50 px-6 py-3 flex items-center space-x-8">
      <ul className="flex space-x-8">
        <li>
          <Link
            href="/"
            className="text-background hover:text-blue-400 transition-colors duration-300"
          >
            Professional
          </Link>
        </li>
        <li>
          <Link
            href="/personal"
            className="text-background hover:text-blue-400 transition-colors duration-300"
          >
            Personal
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
