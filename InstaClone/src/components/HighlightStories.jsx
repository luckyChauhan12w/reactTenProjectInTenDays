import React from 'react';

const HighlightStories = ({ stories }) => {
  return (
    <div className="px-4 md:px-8 max-w-4xl mx-auto">
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {stories.map((story) => (
          <div key={story.id} className="flex-shrink-0 text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-gray-300 mb-2 cursor-pointer hover:scale-105 transition-transform">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-xs text-gray-700 max-w-16 truncate">
              {story.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighlightStories;
