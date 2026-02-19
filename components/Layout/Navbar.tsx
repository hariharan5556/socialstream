
import React from 'react';
import { User } from '../../types';

interface NavbarProps {
  user: User;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onLogout }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-14 bg-white border-b border-gray-200 z-50 flex items-center justify-between px-4 shadow-sm">
      <div className="flex items-center space-x-2">
        <div className="bg-blue-600 rounded-full p-1 h-10 w-10 flex items-center justify-center">
          <span className="text-white font-bold text-2xl">s</span>
        </div>
        <div className="relative hidden md:block">
          <input 
            type="text" 
            placeholder="Search SocialStream" 
            className="bg-gray-100 rounded-full py-2 px-4 pl-10 focus:outline-none w-64"
          />
          <svg className="w-5 h-5 absolute left-3 top-2.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="flex items-center p-1 rounded-full hover:bg-gray-100 cursor-pointer pr-3">
          <img src={user.avatar} className="w-8 h-8 rounded-full mr-2" alt="profile" />
          <span className="font-semibold text-sm hidden sm:block">{user.name}</span>
        </div>
        
        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
          <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
          </svg>
        </button>

        <button 
          onClick={onLogout}
          className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition text-red-500"
          title="Log Out"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
