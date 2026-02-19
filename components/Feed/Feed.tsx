
import React, { useState, useEffect } from 'react';
import CreatePost from './CreatePost';
import PostCard from './PostCard';
import Reels from './Reels';
import NewsSection from '../News/NewsSection';
import { User, Post } from '../../types';

interface FeedProps {
  user: User;
  activeTab: 'home' | 'reels' | 'news';
}

const Feed: React.FC<FeedProps> = ({ user, activeTab }) => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      author: 'Tech Daily',
      authorAvatar: 'https://picsum.photos/seed/tech/100',
      content: 'Just received the latest sample of the new quantum processor. The speed is absolutely mind-blowing! 💻✨',
      timestamp: '2h',
      image: 'https://picsum.photos/seed/quantum/800/450',
      likes: 1250,
      comments: 84
    },
    {
      id: '2',
      author: 'Chef Mario',
      authorAvatar: 'https://picsum.photos/seed/mario/100',
      content: 'Secret ingredient for the perfect carbonara? Guanciale, not bacon. Trust me. 🍝🇮🇹',
      timestamp: '5h',
      likes: 342,
      comments: 12
    }
  ]);

  const handleNewPost = (content: string, image?: string) => {
    const newPost: Post = {
      id: Date.now().toString(),
      author: user.name,
      authorAvatar: user.avatar,
      content,
      timestamp: 'Just now',
      image,
      likes: 0,
      comments: 0
    };
    setPosts([newPost, ...posts]);
  };

  if (activeTab === 'reels') return <Reels user={user} />;
  if (activeTab === 'news') return <NewsSection />;

  return (
    <div className="space-y-6">
      {!user.isGuest && <CreatePost user={user} onSubmit={handleNewPost} />}
      
      {user.isGuest && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
          <p className="text-blue-700 text-sm font-medium">
            You are in <span className="font-bold">Guest Mode</span>. Sign in to post, like, and comment.
          </p>
        </div>
      )}

      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
