import Menu from "./components/Menu";
import Home from "./components/Home";
import Lessons from "./components/Lessons";
import Timer from "./components/Timer";
import Quote from "./components/Quote";
import LessonPage from "./components/LessonPage";

import "./App.css";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Menu />
      <div className="pages-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/lessons/:id" element={<LessonPage />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
