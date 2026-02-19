
import React from 'react';
import { User, Reel } from '../../types';

const REELS: Reel[] = [
  {
    id: '1',
    user: 'NatureVibes',
    avatar: 'https://picsum.photos/seed/nature/50',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-leaves-low-angle-shot-1479-large.mp4',
    caption: 'Autumn is finally here! 🍂 #nature #serenity',
    likes: '45.2K'
  },
  {
    id: '2',
    user: 'CyberGeek',
    avatar: 'https://picsum.photos/seed/techreel/50',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-panning-over-a-server-room-4442-large.mp4',
    caption: 'Server life be like... 🖥️💨 #tech #datacenter',
    likes: '12.8K'
  }
];

const Reels: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="flex flex-col items-center space-y-8 pb-20">
      {REELS.map(reel => (
        <div key={reel.id} className="relative w-full max-w-[360px] aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl flex flex-col group">
          <video 
            src={reel.videoUrl} 
            className="w-full h-full object-cover" 
            loop 
            muted 
            autoPlay 
            playsInline
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 flex flex-col justify-end p-4 text-white">
            <div className="flex items-center space-x-2 mb-3">
              <img src={reel.avatar} className="w-10 h-10 rounded-full border-2 border-white" alt={reel.user} />
              <span className="font-bold">{reel.user}</span>
              <button className="bg-transparent border border-white rounded px-2 py-0.5 text-xs font-bold hover:bg-white hover:text-black transition">
                Follow
              </button>
            </div>
            <p className="text-sm mb-4">{reel.caption}</p>
          </div>

          <div className="absolute right-3 bottom-20 flex flex-col items-center space-y-4 text-white">
            <div className="flex flex-col items-center cursor-pointer">
              <div className="p-3 bg-gray-800/40 backdrop-blur-md rounded-full hover:bg-gray-800 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              </div>
              <span className="text-xs font-bold mt-1">{reel.likes}</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
              <div className="p-3 bg-gray-800/40 backdrop-blur-md rounded-full hover:bg-gray-800 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <span className="text-xs font-bold mt-1">1.2K</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
              <div className="p-3 bg-gray-800/40 backdrop-blur-md rounded-full hover:bg-gray-800 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z"/></svg>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reels;
