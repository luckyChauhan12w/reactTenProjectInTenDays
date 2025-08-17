import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <div className="videoCard">
      <Link to={`/watch/${video.videoId}`}>
        <img
          src={video.thumbnail}
          alt={video.title}
          className="videoCard__thumbnail"
        />
      </Link>
      <div className="videoCard__info">
        <div className="videoCard__text">
          <h4>{video.title}</h4>
          <p>{video.channel}</p>
          <p>
            {video.views} • {video.timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
