import Countdown from "react-countdown";

import "./Timer.css";

function addZero(number) {
  return number < 10 ? `0${number}` : number;
}

function Timer() {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>¡Terminamos el Bootcamp!</span>;
    } else {
      return (
        <div className="timer-container">
          <div className="timer-element">
            {addZero(days)}
            <span>Días</span>
          </div>
          <span className="colon">:</span>
          <div className="timer-element">
            {addZero(hours)}
            <span>Horas</span>
          </div>
          <span className="colon">:</span>
          <div className="timer-element">
          {addZero(minutes)}
            <span>Minutos</span>
          </div>
          <span className="colon">:</span>
          <div className="timer-element">
            {addZero(seconds)}
            <span>Segundos</span>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="img-background">
      <img src="/home_cover.png" alt="background" />
      <Countdown date={new Date("07/08/2022")} renderer={renderer} />
    </div>
  );
}

export default Timer;
