
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center p-4 md:p-6">
      <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        AI Image Generator
      </h1>
      <p className="mt-2 text-lg text-gray-400">
        Turn your ideas into stunning visuals with the power of Gemini.
      </p>
    </header>
  );
};

export default Header;
