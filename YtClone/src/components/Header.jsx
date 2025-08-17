import { Link } from "react-router-dom";
import {
  FaSearch,
  FaMicrophone,
  FaVideo,
  FaBell,
  FaBars,
} from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <AiOutlineMenu className="header__menu" />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="YouTube Logo"
          />
        </Link>
      </div>
      <div className="header__center">
        <input type="text" placeholder="Search" />
        <button className="header__searchButton">
          <FaSearch />
        </button>
        <FaMicrophone className="header__mic" />
      </div>
      <div className="header__right">
        <FaVideo className="header__icon" />
        <FaBell className="header__icon" />
        <img
          className="header__avatar"
          src="https://avatars.githubusercontent.com/u/1?v=4"
          alt="User Avatar"
        />
      </div>
    </div>
  );
};

export default Header;
