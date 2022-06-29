import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import BeatLoader from "react-spinners/BeatLoader";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowUp91,
  faArrowDown19,
} from "@fortawesome/free-solid-svg-icons";

import SideCard from "./SideCard";
import LessonCard from "./LessonCard";
import "./Lessons.css";

function Lessons() {
  const inputRef = useRef();
  const iconRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [lessons, setLessons] = useState([]);
  const [search, setSearch] = useState("");
  const [sprint, setSprint] = useState("all");
  const [dateOrder, setDateOrder] = useState(true);

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

  useEffect(() => {
    async function getLessons() {
      try {
        setIsLoading(true);
        const response = await Axios.get(
          "https://gist.githubusercontent.com/flofal/e625dcdf0ff1568e859ebaf99b211607/raw/02d21343750515b5967f4918402651aee997b98e/lessons.json"
        );
        setIsLoading(false);
        setLessons(response.data);
      } catch (error) {
        console.error("error: ", error);
      }
    }
    getLessons();
  }, []);

  const filteredLessons = lessons.filter(
    (lesson) =>
      (lesson.title.toLowerCase().includes(search.toLowerCase()) ||
        lesson.category.some((singleCategory) =>
          singleCategory.toLowerCase().includes(search.toLowerCase())
        )) &&
      (lesson.sprint === sprint || sprint === "all")
  ).sort((lesson1, lesson2) => {
    const [day1, month1, year1] = lesson1.date.split("/");
    const date1 = new Date(`${year1}/${month1}/${day1}`);
    const [day2, month2, year2] = lesson2.date.split("/");
    const date2 = new Date(`${year2}/${month2}/${day2}`);
    if (date1 >= date2) return dateOrder ? 1 : -1;
    return dateOrder ? -1 : 1;
  });
  return (
    <div className="container">
      <div className="lesson-container">
        <h1>Mis clases</h1>
        <div className="input-container">
          <input
            ref={inputRef}
            className="search"
            type="text"
            value={search}
            placeholder="Busca una clase por título o tema..."
            onChange={(event) => setSearch(event.target.value)}
          />
          <FontAwesomeIcon
            forwardedRef={iconRef}
            icon={faMagnifyingGlass}
            className="search-icon"
          />
        </div>
        <div className="barra">
          <ul className="filter-list">
            <li
              onClick={() => setSprint("all")}
              className={sprint === "all" ? "sprint-selected" : ""}
            >
              Todas
            </li>
            <li
              onClick={() => setSprint("01")}
              className={sprint === "01" ? "sprint-selected" : ""}
            >
              Sprint 01
            </li>
            <li
              onClick={() => setSprint("02")}
              className={sprint === "02" ? "sprint-selected" : ""}
            >
              Sprint 02
            </li>
            <li
              onClick={() => setSprint("03")}
              className={sprint === "03" ? "sprint-selected" : ""}
            >
              Sprint 03
            </li>
            <li
              onClick={() => setSprint("04")}
              className={sprint === "04" ? "sprint-selected" : ""}
            >
              Sprint 04
            </li>
            <li
              onClick={() => setSprint("05")}
              className={sprint === "05" ? "sprint-selected" : ""}
            >
              Sprint 05
            </li>
            <li
              onClick={() => setSprint("06")}
              className={sprint === "06" ? "sprint-selected" : ""}
            >
              Sprint 06
            </li>
          </ul>
          <button className="filter-date-btn" onClick={() => setDateOrder(!dateOrder)}>
            <span>Fecha</span>
            {dateOrder ? (
              <FontAwesomeIcon icon={faArrowDown19} />
            ) : (
              <FontAwesomeIcon icon={faArrowUp91} />
            )}
          </button>
        </div>
        {isLoading && (
          <div className="loading">
            <BeatLoader color="#ff6833" loading={isLoading} size={15} />
          </div>
        )}

        {!isLoading && (
          <>
            {filteredLessons.map(function (lesson) {
              return (
                <Link
                  to={`/lessons/${lesson.id}`}
                  state={{ lesson }}
                  key={lesson.id}
                >
                  <LessonCard lesson={lesson} />
                </Link>
              );
            })}
          </>
        )}
      </div>

      <div className="side-container">
        <h4>Hoja de ejercicios por sprint: </h4>
        <SideCard
          sideElement="01"
          title="HTML | CSS | JS"
          description="Contiene 29 ejercicios"
          url="https://haeduuy.sharepoint.com/:b:/s/BootcampGrupo2204/EdNBJ7zDJZZOtkFjlGZqQdIBCKKwXx8R4ZZUkUuWkF8omw?e=4cAYp2"
        />
        <SideCard
          sideElement="02"
          title="Node | MySQL"
          description="Contiene 23 ejercicios"
          url="https://haeduuy.sharepoint.com/:b:/s/BootcampGrupo2204/EUp6izd7tTNDlNwO_VpT3tcBcAoqLXQmjajxydvC2mKE-w?e=TGOx6E"
        />
        <SideCard
          sideElement="03"
          title="Passport | Mongo"
          description="Contiene 7 ejercicios"
          url="https://haeduuy.sharepoint.com/:b:/s/BootcampGrupo2204/EXdUhv5hiyBPrdO0krbGBbkBQ2hyB0qk77RruhDcxK4d1A?e=dvZMIF"
        />
        <SideCard
          sideElement="04"
          title="ReactJS"
          description="Contiene 21 ejercicios"
          url="https://haeduuy.sharepoint.com/sites/BootcampGrupo2204/Shared%20Documents/Forms/AllItems.aspx?sortField=Modified&isAscending=false&id=%2Fsites%2FBootcampGrupo2204%2FShared%20Documents%2FMaterial%2FHA%5FBootcamp%5FSprint4%5FEjercicios%2Epdf&parent=%2Fsites%2FBootcampGrupo2204%2FShared%20Documents%2FMaterial"
        />
        <SideCard
          sideElement="05"
          title="Proyecto final"
          description="Contiene 3 ejercicios"
          url="https://haeduuy.sharepoint.com/:b:/s/BootcampGrupo2204/EWaEefoHTLBHhSHvVr1Jn_8BZg_zQXbf7hfakIQeddwhMA?e=Gu3OoD"
        />
      </div>
    </div>
  );
}

export default Lessons;
