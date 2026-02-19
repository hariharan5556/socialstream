
export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  isGuest?: boolean;
}

export interface Post {
  id: string;
  author: string;
  authorAvatar: string;
  content: string;
  timestamp: string;
  image?: string;
  likes: number;
  comments: number;
}

export interface NewsArticle {
  title: string;
  description: string;
  url: string;
  source: string;
  time: string;
}

export interface Reel {
  id: string;
  user: string;
  avatar: string;
  videoUrl: string;
  caption: string;
  likes: string;
}
