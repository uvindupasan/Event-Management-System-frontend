'use client';

import React, { useState } from 'react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate password reset action
    console.log('Password reset link sent to:', email);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-blue-800 px-4 py-12 animate-gradient-x">
      <div className="max-w-md w-full bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-white/20 transform transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-1">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2 animate-fade-in-down">
            Reset Your Password
          </h2>
          <p className="text-gray-600 animate-fade-in-down animate-delay-100">
            Enter your email to receive a reset link
          </p>
        </div>
        
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="animate-fade-in-up animate-delay-200">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg animate-fade-in-up animate-delay-300"
            >
              <span className="relative group">
                <span className="absolute -inset-0.5 bg-purple-800 rounded-lg blur opacity-0 group-hover:opacity-75 transition-all duration-300 group-hover:animate-pulse"></span>
                <span className="relative">Send Reset Link</span>
              </span>
            </button>
          </form>
        ) : (
          <div className="text-center p-6 bg-green-50 rounded-lg border border-green-100 animate-fade-in-up animate-delay-100 animate-spring">
            <svg 
              className="mx-auto h-12 w-12 text-green-500 animate-bounce-in" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-green-800 animate-fade-in-up animate-delay-200">
              Email Sent!
            </h3>
            <p className="mt-1 text-sm text-green-600 animate-fade-in-up animate-delay-300">
              We've sent a password reset link to <span className="font-semibold">{email}</span>
            </p>
          </div>
        )}

        <div className="mt-8 text-center text-sm text-gray-500 animate-fade-in-up animate-delay-400">
          <p>
            Remember your password?{' '}
            <a 
              href="/login" 
              className="font-medium text-purple-600 hover:text-purple-500 transition-colors duration-300 hover:underline underline-offset-2"
            >
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}