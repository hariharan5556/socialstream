
import React, { useState } from 'react';
import { User } from '../../types';

interface LoginPageProps {
  onLogin: (user: User, remember: boolean) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      // Simulate successful login
      const userData: User = {
        id: Math.random().toString(36).substr(2, 9),
        name: email.split('@')[0],
        email: email,
        avatar: `https://picsum.photos/seed/${email}/200`
      };
      onLogin(userData, remember);
    }
  };

  const handleGuestMode = () => {
    const guestUser: User = {
      id: 'guest',
      name: 'Guest Explorer',
      email: 'guest@example.com',
      avatar: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      isGuest: true
    };
    onLogin(guestUser, false);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 items-center justify-center p-4">
      <div className="lg:w-1/2 max-w-lg mb-8 lg:mb-0 lg:pr-12 text-center lg:text-left">
        <h1 className="text-blue-600 text-6xl font-bold mb-4">socialstream</h1>
        <p className="text-2xl font-medium text-gray-800 leading-tight">
          Connect with friends and the world around you on SocialStream.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white text-xl font-bold py-3 rounded-md hover:bg-blue-700 transition"
          >
            Log In
          </button>
          
          <div className="flex items-center justify-between text-sm text-gray-500">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input 
                type="checkbox" 
                checked={remember} 
                onChange={(e) => setRemember(e.target.checked)}
                className="rounded text-blue-600"
              />
              <span>Remember password</span>
            </label>
            <a href="#" className="text-blue-600 hover:underline">Forgotten password?</a>
          </div>

          <hr className="my-6 border-gray-300" />

          <div className="flex flex-col space-y-4">
            <button
              type="button"
              className="bg-green-500 text-white text-lg font-bold py-3 px-6 rounded-md hover:bg-green-600 transition mx-auto"
            >
              Create new account
            </button>
            <button
              type="button"
              onClick={handleGuestMode}
              className="text-gray-600 border border-gray-300 py-2 px-4 rounded-md hover:bg-gray-50 transition font-medium text-sm flex items-center justify-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Continue as GUEST
            </button>
          </div>
        </form>
        <p className="mt-8 text-center text-sm">
          <span className="font-bold">Create a Page</span> for a celebrity, brand or business.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
