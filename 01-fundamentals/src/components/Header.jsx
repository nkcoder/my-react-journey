import React from 'react';
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';

const Header = () => {
  return (
    <div className="bg-gray-200 p-4">
      <h1>Welcome to My Website!</h1>
      <nav className="flex flex-row justify-center gap-4">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  );
};

export default Header;
