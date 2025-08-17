import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { VideoContext } from "../context/VideoContext";
import VideoDetail from "../components/VideoDetails";
import VideoList from "../components/VideoList";

const Watch = () => {
  const { videoId } = useParams();
  const { videos, selectedVideo, setSelectedVideo } = useContext(VideoContext);

  useEffect(() => {
    const video = videos.find((v) => v.videoId === videoId);
    setSelectedVideo(video);
  }, [videoId, videos, setSelectedVideo]);

  if (!selectedVideo) return <div>Loading...</div>;

  return (
    <div className="watch">
      <div className="watch__content">
        <VideoDetail video={selectedVideo} />
        <div className="watch__related">
          <h2>Related Videos</h2>
          <VideoList videos={videos.filter((v) => v.videoId !== videoId)} />
        </div>
      </div>
    </div>
  );
};

export default Watch;
