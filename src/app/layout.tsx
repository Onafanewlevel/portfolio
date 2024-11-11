import '@/styles/globals.css';
import Navbar from '../components/Navbar';
import React from 'react';

export const metadata = {
  title: 'My Portfolio',
  description: 'My personal and professional portfolio',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" className="dark"><body className="bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
    </body></html>
  );
};

export default RootLayout;
