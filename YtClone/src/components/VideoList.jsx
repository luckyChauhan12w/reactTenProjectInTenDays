import VideoCard from "./VideoCard";

const VideoList = ({ videos }) => {
  return (
    <div className="videoList">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoList;
