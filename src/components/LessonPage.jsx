import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePowerpoint } from "@fortawesome/free-solid-svg-icons";
import { faFilePen, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

import "./LessonPage.css";
import SideCard from "./SideCard";

function LessonPage() {
  const location = useLocation();
  const lesson = location.state.lesson;
  const [isMorning, setIsMorning] = useState(lesson.videos[0] !== "");

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
                checked={!isMorning}
                onClick={() => setIsMorning(!isMorning)}
              />
              <label htmlFor="toggle" className="switch" />
            </div>
          </div>
          <h1>{lesson.title}</h1>
          <p>{lesson.description}</p>
        </div>
        <div className="side-container">
          <h4>Material de esta clase: </h4>

          <SideCard
            sideElement={<FontAwesomeIcon icon={faFilePowerpoint} />}
            title="Diapositivas de la clase"
            url={lesson.slides}
          />
          <SideCard
            title="Ejercicios del sprint"
            sideElement={<FontAwesomeIcon icon={faFilePen} />}
            url={lesson.exercises}
          />
          <h4>Compartido en esta clase: </h4>

          {lesson.tools_shared.map(function (tool) {
            return (
              <SideCard
                title={tool.title}
                sideElement={<FontAwesomeIcon icon={faScrewdriverWrench} />}
                url={tool.url}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default LessonPage;
