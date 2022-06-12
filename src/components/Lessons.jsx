import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import SideCard from "./SideCard";
import LessonCard from "./LessonCard";
import "./Lessons.css";

function Lessons() {
  const inputRef = useRef();
  const iconRef = useRef();

  useEffect(() => {
    function handleFocus() {
      iconRef.current.style.color = "#ff6833";
    }

    function handleFocusOut() {
      iconRef.current.style.color = "#838d9b";
    }
    inputRef.current.addEventListener("focus", handleFocus);
    inputRef.current.addEventListener("focusout", handleFocusOut);
  }, []);

  return (
    <div className="container">
      <div className="lesson-container">
        <h1>Mis clases</h1>
        <div className="input-container">
          <input
            ref={inputRef}
            className="search"
            type="text"
            placeholder="Busca una clase..."
          />
          <FontAwesomeIcon
            forwardedRef={iconRef}
            icon={faMagnifyingGlass}
            className="search-icon"
          />
        </div>
        <ul className="filter-list">
          <li>Todas</li>
          <li>Sprint 01</li>
          <li>Sprint 02</li>
          <li>Sprint 03</li>
          <li>Sprint 04</li>
          <li>Sprint 05</li>
          <li>Sprint 06</li>
        </ul>
        <LessonCard />
        <LessonCard />
        <LessonCard />
      </div>
      <div className="side-container">
        <h4>Hoja de ejercicios por sprint: </h4>
        <SideCard number="01" title="HTML | CSS | JS" description="Contiene 29 ejercicios" url="https://haeduuy.sharepoint.com/:b:/s/BootcampGrupo2204/EdNBJ7zDJZZOtkFjlGZqQdIBCKKwXx8R4ZZUkUuWkF8omw?e=4cAYp2" />
        <SideCard number="02" title="Node | MySQL" description="Contiene 23 ejercicios" url="https://haeduuy.sharepoint.com/:b:/s/BootcampGrupo2204/EUp6izd7tTNDlNwO_VpT3tcBcAoqLXQmjajxydvC2mKE-w?e=TGOx6E" />
        <SideCard number="03" title="Passport | Mongo" description="Contiene 7 ejercicios" url="https://haeduuy.sharepoint.com/:b:/s/BootcampGrupo2204/EXdUhv5hiyBPrdO0krbGBbkBQ2hyB0qk77RruhDcxK4d1A?e=dvZMIF" />
        <SideCard number="04" title="ReactJS" description="Contiene 21 ejercicios" url="https://haeduuy.sharepoint.com/sites/BootcampGrupo2204/Shared%20Documents/Forms/AllItems.aspx?sortField=Modified&isAscending=false&id=%2Fsites%2FBootcampGrupo2204%2FShared%20Documents%2FMaterial%2FHA%5FBootcamp%5FSprint4%5FEjercicios%2Epdf&parent=%2Fsites%2FBootcampGrupo2204%2FShared%20Documents%2FMaterial" />
      </div>
    </div>
  );
}

export default Lessons;
