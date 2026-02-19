
import React, { useState, useEffect } from 'react';
import LoginPage from './components/Auth/LoginPage';
import Dashboard from './components/Layout/Dashboard';
import { User } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for "Remember Me" session
    const savedUser = localStorage.getItem('social_stream_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const handleLogin = (userData: User, remember: boolean) => {
    setUser(userData);
    if (remember) {
      localStorage.setItem('social_stream_user', JSON.stringify(userData));
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('social_stream_user');
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {!user ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <Dashboard user={user} onLogout={handleLogout} />
      )}
    </div>
  );
};

export default App;
