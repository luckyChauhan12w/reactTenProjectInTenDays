import { useContext } from "react";
import { VideoContext } from "../context/VideoContext";
import VideoList from "../components/VideoList";

const Home = () => {
  const { videos } = useContext(VideoContext);

  return (
    <div className="home">
      <VideoList videos={videos} />
    </div>
  );
};

export default Home;
