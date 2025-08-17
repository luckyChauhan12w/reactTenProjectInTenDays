import { createContext, useState } from "react";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([
    {
      id: "1",
      title: "Learn React in 1 Hour",
      channel: "CodeWithHarry",
      views: "1.2M views",
      timestamp: "3 days ago",
      thumbnail: "https://i.ytimg.com/vi/EHTWMpD6S_0/maxresdefault.jpg",
      videoId: "EHTWMpD6S_0",
      description: "Learn React fundamentals in just one hour!",
    },
    {
      id: "2",
      title: "JavaScript Crash Course",
      channel: "Traversy Media",
      views: "2.5M views",
      timestamp: "1 month ago",
      thumbnail: "https://i.ytimg.com/vi/hdI2bqOjy3c/maxresdefault.jpg",
      videoId: "hdI2bqOjy3c",
      description: "JavaScript crash course for beginners",
    },
    {
      id: "3",
      title: "Python for Beginners",
      channel: "Programming with Mosh",
      views: "5.7M views",
      timestamp: "2 years ago",
      thumbnail: "https://i.ytimg.com/vi/_uQrJ0TkZlc/maxresdefault.jpg",
      videoId: "_uQrJ0TkZlc",
      description: "Learn Python programming in this beginner course",
    },
    {
      id: "4",
      title: "CSS Grid Complete Guide",
      channel: "Web Dev Simplified",
      views: "890K views",
      timestamp: "1 year ago",
      thumbnail: "https://i.ytimg.com/vi/9zBsdzdE4sM/maxresdefault.jpg",
      videoId: "9zBsdzdE4sM",
      description: "Complete guide to CSS Grid layout",
    },
    {
      id: "5",
      title: "Node.js Tutorial for Beginners",
      channel: "The Net Ninja",
      views: "1.1M views",
      timestamp: "8 months ago",
      thumbnail: "https://i.ytimg.com/vi/w-7RQ46RgxU/maxresdefault.jpg",
      videoId: "w-7RQ46RgxU",
      description: "Learn Node.js from scratch",
    },
    {
      id: "6",
      title: "TypeScript Full Course",
      channel: "freeCodeCamp",
      views: "3.4M views",
      timestamp: "1 year ago",
      thumbnail: "https://i.ytimg.com/vi/gp5H0Vw39yw/maxresdefault.jpg",
      videoId: "gp5H0Vw39yw",
      description: "Complete TypeScript course for beginners",
    },
  ]);

  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <VideoContext.Provider value={{ videos, selectedVideo, setSelectedVideo }}>
      {children}
    </VideoContext.Provider>
  );
};
