import React from 'react';

const GitHubCard = ({ userData, loading, error }) => {
  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-300">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-300">
        <div className="text-red-500 dark:text-red-400 text-center">
          <p className="font-semibold">Error loading GitHub data</p>
          <p className="text-sm mt-2">{error}</p>
        </div>
      </div>
    );
  }

  if (!userData) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-300">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={userData.avatar_url}
          alt={`${userData.login}'s avatar`}
          className="w-16 h-16 rounded-full border-2 border-gray-200 dark:border-gray-600"
        />
        <div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            {userData.name || userData.login}
          </h2>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 dark:text-blue-400 hover:underline text-sm"
          >
            @{userData.login}
          </a>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
          <div className="text-2xl font-bold text-gray-800 dark:text-white">
            {userData.public_repos}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Repos</div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
          <div className="text-2xl font-bold text-gray-800 dark:text-white">
            {userData.followers}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Followers</div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
          <div className="text-2xl font-bold text-gray-800 dark:text-white">
            {userData.following}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Following</div>
        </div>
      </div>
    </div>
  );
};

export default GitHubCard;