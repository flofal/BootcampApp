import { Link } from "react-router-dom";

import "./Home.css";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="left-container">
          <h1>Bootcamp App</h1>
          <div className="line" />
          <p>
            En Bootcamp App encontrarás toda la información relacionada al grupo
            2204 del bootcamp de{" "}
            <a href="https://ha.dev" target="_blank">
              Hack Academy
            </a>
            .
          </p>
          <Link to="/lessons" className="btn-home">
            <button  className="btn-home">Empezar</button>
          </Link>
        </div>
        <div className="img-container">
          <img className="dots" src="/dots-img.png" alt="dots decoration" />
          <img
            className="image-cover"
            src="/home_cover.png"
            alt="mujer programando"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
