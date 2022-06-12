import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./SideCard.css";

function SideCard({ number, title, description, url }) {
  return (
    <a href={url} target="_blank">
      <div className="card-side">
        <div className="card-side-content">
          <span className="card-side-number">{number}</span>
          <div className="card-side-right">
            <span className="card-side-title">{title}</span>
            <small className="card-side-description">{description}</small>
          </div>
        </div>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </a>
  );
}

export default SideCard;
