
import React, { useEffect, useState } from 'react';
import { fetchLiveNews } from '../../services/geminiService';
import { NewsArticle } from '../../types';

const RightPanel: React.FC = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      const trending = await fetchLiveNews();
      setNews(trending.slice(0, 4));
      setLoading(false);
    };
    loadNews();
  }, []);

  const contacts = [
    { name: 'Sarah Wilson', avatar: 'https://picsum.photos/seed/sarah/50' },
    { name: 'John Doe', avatar: 'https://picsum.photos/seed/john/50' },
    { name: 'Alice Smith', avatar: 'https://picsum.photos/seed/alice/50' },
    { name: 'Bob Johnson', avatar: 'https://picsum.photos/seed/bob/50' },
    { name: 'Emma Davis', avatar: 'https://picsum.photos/seed/emma/50' },
  ];

  return (
    <div className="py-4 space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-500">Trending News</h3>
          <span className="text-blue-600 text-xs font-semibold cursor-pointer">See All</span>
        </div>
        
        {loading ? (
          <div className="space-y-4 animate-pulse">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-12 bg-gray-100 rounded-md"></div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {news.map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <p className="text-xs text-gray-400 font-semibold uppercase">{item.source}</p>
                <h4 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-400">{item.time}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <div className="flex items-center justify-between mb-4 px-2">
          <h3 className="font-bold text-gray-500">Contacts</h3>
          <div className="flex space-x-2">
            <svg className="w-5 h-5 text-gray-500 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <svg className="w-5 h-5 text-gray-500 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        <div className="space-y-1">
          {contacts.map((contact, idx) => (
            <div key={idx} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-200 cursor-pointer relative">
              <div className="relative">
                <img src={contact.avatar} className="w-9 h-9 rounded-full" alt={contact.name} />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#f0f2f5] rounded-full"></div>
              </div>
              <span className="font-medium text-sm text-gray-800">{contact.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
