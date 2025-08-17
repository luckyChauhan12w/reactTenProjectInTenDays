const VideoDetail = ({ video }) => {
  return (
    <div className="videoDetail">
      <div className="videoDetail__player">
        <iframe
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${video.videoId}`}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="videoDetail__info">
        <h2>{video.title}</h2>
        <div className="videoDetail__stats">
          <p>
            {video.views} • {video.timestamp}
          </p>
        </div>
        <div className="videoDetail__channel">
          <p>{video.channel}</p>
        </div>
        <div className="videoDetail__description">
          <p>{video.description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
