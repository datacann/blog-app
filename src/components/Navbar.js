import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <div className="flex gap-4">
        <Link to="/" className="hover:underline">Blog</Link>
        {user && <Link to="/add" className="hover:underline">Add Blog</Link>}
      </div>

      <div>
        {user ? (
          <div className="flex items-center gap-3">
            <span className="text-sm">👋 {user.email}</span> 
            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 text-sm"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-3 text-sm">
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/signup" className="hover:underline">Signup</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;