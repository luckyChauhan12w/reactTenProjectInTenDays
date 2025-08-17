import React from 'react';

const ProfileHeader = ({ profileData }) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 p-4 md:p-8 max-w-4xl mx-auto">
      {/* Profile Picture */}
      <div className="flex-shrink-0">
        <div className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-2 border-gray-200">
          <img
            src={profileData.profileImage}
            alt={profileData.displayName}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Profile Info */}
      <div className="flex-1 w-full">
        {/* Username and Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <h1 className="text-xl md:text-2xl font-light">{profileData.username}</h1>
            {profileData.isVerified && (
              <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            )}
          </div>
          
          <div className="flex gap-2">
            <button className="px-4 py-1.5 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition-colors">
              Follow
            </button>
            <button className="px-4 py-1.5 bg-gray-200 text-black text-sm font-medium rounded-md hover:bg-gray-300 transition-colors">
              Message
            </button>
            <button className="p-1.5 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-6 md:gap-8 mb-4">
          <div className="text-center">
            <div className="font-semibold text-sm md:text-base">{profileData.posts}</div>
            <div className="text-gray-600 text-xs md:text-sm">posts</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-sm md:text-base">{profileData.followers}</div>
            <div className="text-gray-600 text-xs md:text-sm">followers</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-sm md:text-base">{profileData.following}</div>
            <div className="text-gray-600 text-xs md:text-sm">following</div>
          </div>
        </div>

        {/* Bio */}
        <div className="space-y-1">
          <div className="font-semibold text-sm">{profileData.displayName}</div>
          <div className="text-sm whitespace-pre-line">{profileData.bio}</div>
          {profileData.website && (
            <a href="https://daneshverma.onrender.com/" target='_blank' className="text-blue-900 text-sm hover:underline">
              {profileData.website}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
