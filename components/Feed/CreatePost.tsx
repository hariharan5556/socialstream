
import React, { useState } from 'react';
import { User } from '../../types';
import { generatePostInspiration } from '../../services/geminiService';

interface CreatePostProps {
  user: User;
  onSubmit: (content: string, image?: string) => void;
}

const CreatePost: React.FC<CreatePostProps> = ({ user, onSubmit }) => {
  const [content, setContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onSubmit(content);
      setContent('');
    }
  };

  const handleAiInspiration = async () => {
    setIsGenerating(true);
    const idea = await generatePostInspiration("life and happiness");
    setContent(idea);
    setIsGenerating(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <div className="flex items-center space-x-3 mb-4">
        <img src={user.avatar} className="w-10 h-10 rounded-full" alt="profile" />
        <button 
          onClick={() => {}} 
          className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-full py-2.5 px-4 text-left transition"
        >
          What's on your mind, {user.name.split(' ')[0]}?
        </button>
      </div>
      
      <div className="border-t border-gray-200 pt-3">
        <form onSubmit={handleSubmit}>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Share something..."
            className="w-full h-24 p-2 focus:outline-none resize-none text-lg"
          ></textarea>
          
          <div className="flex flex-wrap items-center justify-between gap-2 mt-2">
            <div className="flex space-x-1">
              <button 
                type="button"
                className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 rounded-lg text-gray-600 font-semibold transition"
              >
                <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-10-7h2v8h-2v-8zm-4 2h2v6H7v-6zm8-4h2v10h-2V10z" />
                </svg>
                <span>Live Video</span>
              </button>
              <button 
                type="button"
                className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 rounded-lg text-gray-600 font-semibold transition"
              >
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                </svg>
                <span>Photo/video</span>
              </button>
            </div>
            
            <div className="flex space-x-2">
              <button 
                type="button"
                onClick={handleAiInspiration}
                disabled={isGenerating}
                className="bg-purple-100 text-purple-700 font-bold py-2 px-4 rounded-lg hover:bg-purple-200 transition text-sm flex items-center"
              >
                {isGenerating ? 'Thinking...' : '✨ AI Help'}
              </button>
              <button 
                type="submit"
                disabled={!content.trim()}
                className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
