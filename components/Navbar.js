import Link from 'next/link';
import React from 'react';
const Navbar = () => {
  return (
    <nav className="bg-red-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          Kolkata Storyteller
        </div>
        <div className="space-x-4">
          <Link href="/" className="text-white">Home</Link>
          <Link href="/about" className="text-white">About</Link>
          <Link href="/features" className="text-white">Features</Link>
          <Link href="/login" className="text-white">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
