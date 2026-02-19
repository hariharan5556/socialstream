
import React, { useState } from 'react';
import { Post } from '../../types';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <img src={post.authorAvatar} className="w-10 h-10 rounded-full border border-gray-200" alt={post.author} />
          <div>
            <h4 className="font-bold text-gray-800 hover:underline cursor-pointer">{post.author}</h4>
            <p className="text-xs text-gray-500 font-semibold">{post.timestamp} • 🌎</p>
          </div>
        </div>
        <button className="text-gray-500 hover:bg-gray-100 p-2 rounded-full transition">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="px-4 pb-3">
        <p className="text-gray-800 text-[15px] whitespace-pre-wrap">{post.content}</p>
      </div>

      {/* Image if any */}
      {post.image && (
        <div className="w-full">
          <img src={post.image} className="w-full h-auto object-cover max-h-[600px]" alt="post-visual" />
        </div>
      )}

      {/* Stats */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100 text-gray-500 text-sm">
        <div className="flex items-center space-x-1">
          <div className="flex -space-x-1">
            <div className="bg-blue-500 rounded-full p-1 text-white border border-white">
              <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
            </div>
            <div className="bg-red-500 rounded-full p-1 text-white border border-white">
              <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </div>
          </div>
          <span>{post.likes + (liked ? 1 : 0)}</span>
        </div>
        <div className="flex space-x-3">
          <span>{post.comments} comments</span>
          <span>4 shares</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex px-2 py-1">
        <button 
          onClick={() => setLiked(!liked)}
          className={`flex-1 flex items-center justify-center space-x-2 py-2 rounded-md transition ${liked ? 'text-blue-600' : 'hover:bg-gray-100 text-gray-600'} font-semibold`}
        >
          <svg className="w-5 h-5" fill={liked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.708c.286 0 .545.16.654.415l1.59 3.708C21.432 15.228 21 16.5 19.852 16.5H16.5m-2.5-6.5v6.5m0-6.5V6.5a2 2 0 00-2-2h-1.5a1 1 0 00-1 1v2.5m0 0H6.5a2.5 2.5 0 00-2.5 2.5v1.5a1 1 0 001 1h2.5m1 0h1.5a2 2 0 002-2v-1.5" />
          </svg>
          <span>Like</span>
        </button>
        <button className="flex-1 flex items-center justify-center space-x-2 py-2 hover:bg-gray-100 rounded-md transition text-gray-600 font-semibold">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span>Comment</span>
        </button>
        <button className="flex-1 flex items-center justify-center space-x-2 py-2 hover:bg-gray-100 rounded-md transition text-gray-600 font-semibold">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default PostCard;
