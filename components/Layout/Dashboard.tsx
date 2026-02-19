
import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Feed from '../Feed/Feed';
import RightPanel from './RightPanel';
import { User } from '../../types';

interface DashboardProps {
  user: User;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState<'home' | 'reels' | 'news'>('home');

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar user={user} onLogout={onLogout} />
      
      <div className="flex flex-1 overflow-hidden pt-14">
        {/* Left Sidebar */}
        <div className="hidden lg:block w-80 h-full overflow-y-auto">
          <Sidebar user={user} activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Main Feed */}
        <div className="flex-1 h-full overflow-y-auto bg-[#f0f2f5] px-4 md:px-8 lg:px-12 py-6">
           <div className="max-w-[680px] mx-auto">
              <Feed user={user} activeTab={activeTab} />
           </div>
        </div>

        {/* Right Sidebar - News & Contacts */}
        <div className="hidden xl:block w-80 h-full overflow-y-auto bg-[#f0f2f5] pr-4">
           <RightPanel />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
