
import React, { useEffect, useState } from 'react';
import { fetchLiveNews } from '../../services/geminiService';
import { NewsArticle } from '../../types';

const NewsSection: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await fetchLiveNews();
      setArticles(data);
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col space-y-6">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-white rounded-xl p-6 shadow-sm animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg w-fit">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
        <span className="font-bold uppercase text-sm tracking-wider">Live Updates</span>
      </div>

      {articles.map((article, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
          <div className="p-6">
            <div className="flex justify-between items-start mb-3">
              <span className="text-blue-600 font-bold text-xs uppercase bg-blue-50 px-2 py-1 rounded">{article.source}</span>
              <span className="text-gray-400 text-xs font-medium">{article.time}</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
              {article.title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {article.description}
            </p>
            <a 
              href={article.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold text-sm flex items-center hover:underline"
            >
              Read full story
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      ))}

      {articles.length === 0 && (
        <div className="text-center py-20 bg-white rounded-xl shadow-sm">
          <p className="text-gray-500">No news updates at the moment. Check back later!</p>
        </div>
      )}
    </div>
  );
};

export default NewsSection;
