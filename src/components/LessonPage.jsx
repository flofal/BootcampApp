import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePowerpoint } from "@fortawesome/free-solid-svg-icons";
import { faFilePen } from "@fortawesome/free-solid-svg-icons";

import "./LessonPage.css";
import SideCard from "./SideCard";

function LessonPage() {
  const location = useLocation();
  const lesson = location.state.lesson;
  const [isMorning, setIsMorning] = useState(true);

  return (
    <>
      <div className="lesson-page-container">
        <div className="lesson-left-side">
          <div className="video-container">
            {isMorning && lesson.videos[0] !== "" && (
              <video src={lesson.videos[0]} controls />
            )}
            {!isMorning && lesson.videos[1] !== "" && (
              <video src={lesson.videos[1]} controls />
            )}
          </div>

          <div className="title-switch-container">
            <small>{lesson.date}</small>
            <div className="switch-container">
              <input
                type="checkbox"
                id="toggle"
                className="offscreen"
                onClick={() => setIsMorning(!isMorning)}
              />
              <label htmlFor="toggle" className="switch"></label>
            </div>
          </div>
          <h1>{lesson.title}</h1>
          <p>{lesson.description}</p>
        </div>
        <div className="side-container">
          <h4>Material de esta clase: </h4>

          <SideCard
            number={<FontAwesomeIcon icon={faFilePowerpoint} />}
            title="Diapositivas de la clase"
            url={lesson.slides}
          />
          <SideCard
            title="Ejercicios del sprint"
            number={<FontAwesomeIcon icon={faFilePen} />}
            url={lesson.exercises}
          />
          <h4>Compartido en esta clase: </h4>

          {lesson.tools_shared.map(function (tool) {
            return (
              <SideCard
                title="Herramienta"
                number={<FontAwesomeIcon icon={faFilePen} />}
                url={tool}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default LessonPage;
