
import React from 'react';
import { User } from '../../types';

interface SidebarProps {
  user: User;
  activeTab: string;
  setActiveTab: (tab: any) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ user, activeTab, setActiveTab }) => {
  const links = [
    { id: 'home', label: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { id: 'reels', label: 'Reels & Shorts', icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { id: 'news', label: 'Live News', icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z M14 4v4h4' },
    { id: 'friends', label: 'Friends', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
    { id: 'groups', label: 'Groups', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
    { id: 'marketplace', label: 'Marketplace', icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' },
  ];

  return (
    <div className="flex flex-col p-2 space-y-1">
      <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
        <img src={user.avatar} className="w-9 h-9 rounded-full" alt="profile" />
        <span className="font-semibold">{user.name}</span>
      </div>
      
      {links.map((link) => (
        <button
          key={link.id}
          onClick={() => setActiveTab(link.id)}
          className={`flex items-center space-x-3 p-3 rounded-lg w-full transition ${
            activeTab === link.id ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-200 text-gray-700'
          }`}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={link.icon} />
          </svg>
          <span className="font-medium">{link.label}</span>
        </button>
      ))}

      <hr className="my-2 border-gray-300 mx-2" />
      
      <div className="p-2">
        <h3 className="text-gray-500 font-semibold mb-2">Your Shortcuts</h3>
        <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
          <div className="w-9 h-9 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold">A</div>
          <span className="font-medium text-sm">App Development Group</span>
        </div>
        <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
          <div className="w-9 h-9 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">N</div>
          <span className="font-medium text-sm">Next Gen Tech News</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
