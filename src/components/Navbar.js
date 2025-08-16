import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <h1 className="text-white text-xl font-bold">AtlasRank</h1>
      <div className="space-x-4">
        <Link to="/" className="text-white hover:text-gray-200">Home</Link>
        <Link to="/login" className="text-white hover:text-gray-200">Login</Link>
        <Link to="/register" className="text-white hover:text-gray-200">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
