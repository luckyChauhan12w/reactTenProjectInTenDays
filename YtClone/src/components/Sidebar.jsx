import { Link } from "react-router-dom";
import {
  FaHome,
  FaFire,
  FaYoutube,
  FaFilm,
  FaHistory,
  FaThumbsUp,
  FaCompass,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__item">
        <FaHome className="sidebar__icon" />
        <span>Home</span>
      </div>
      <div className="sidebar__item">
        <FaFire className="sidebar__icon" />
        <span>Trending</span>
      </div>
      <div className="sidebar__item">
        <FaYoutube className="sidebar__icon" />
        <span>Subscriptions</span>
      </div>
      <hr />
      <div className="sidebar__item">
        <FaFilm className="sidebar__icon" />
        <span>Library</span>
      </div>
      <div className="sidebar__item">
        <FaHistory className="sidebar__icon" />
        <span>History</span>
      </div>
      <div className="sidebar__item">
        <FaThumbsUp className="sidebar__icon" />
        <span>Liked videos</span>
      </div>
      <div className="sidebar__item">
        <FaCompass className="sidebar__icon" />
        <span>Explore</span>
      </div>
    </div>
  );
};

export default Sidebar;
