import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBook,
  faStopwatch,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";

import "./Menu.css";

function Menu() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isLessonsPage = location.pathname.includes("/lessons");
  const isTimerPage = location.pathname === "/timer";
  const isQuotePage = location.pathname === "/quote";

  return (
    <div className="menu">
      <Link to="/">
        <div className="menu-item-container">
          {isHomePage && <div className="menu-selected-bar" />}
          <FontAwesomeIcon
            icon={faHouse}
            className={`icons${isHomePage ? " icon-selected" : ""}`}
          />
        </div>
      </Link>
      <Link to="/lessons">
        <div className="menu-item-container">
          {isLessonsPage && <div className="menu-selected-bar" />}
          <FontAwesomeIcon
            icon={faBook}
            className={`icons${isLessonsPage ? " icon-selected" : ""}`}
          />
        </div>
      </Link>
      <Link to="/timer">
        <div className="menu-item-container">
          {isTimerPage && <div className="menu-selected-bar" />}
          <FontAwesomeIcon
            icon={faStopwatch}
            className={`icons${isTimerPage ? " icon-selected" : ""}`}
          />
        </div>
      </Link>
      <Link to="/quote">
        <div className="menu-item-container">
          {isQuotePage && <div className="menu-selected-bar" />}
          <FontAwesomeIcon
            icon={faQuoteRight}
            className={`icons${isQuotePage ? " icon-selected" : ""}`}
          />
        </div>
      </Link>
    </div>
  );
}

export default Menu;
