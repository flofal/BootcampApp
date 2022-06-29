import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from "@fortawesome/free-solid-svg-icons";
import BeatLoader from "react-spinners/BeatLoader";
import Footer from "./Footer";

import Axios from "axios";
import "./Quote.css";

function Quote() {
  const [quote, setQuote] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  async function getQuotes() {
    try {
      setIsLoading(true);
      const response = await Axios.get("https://type.fit/api/quotes");
      setIsLoading(false);
      const random = Math.floor(Math.random() * (1643 - 0)) + 0;
      setQuote(response.data[random]);
    } catch (error) {
      console.error("error: ", error);
    }
  }

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <>
      <div className="quotes-container">
        <h1>Frase motivacional</h1>
        <div className="card-quote">
          <BeatLoader color="#ff6833" loading={isLoading} size={15} />
          {!isLoading && (
            <>
              <h2>{quote.text}</h2>
              <p>{quote.author} </p>
              <button className="dice">
                <FontAwesomeIcon
                  icon={faDice}
                  className="dice"
                  onClick={getQuotes}
                  // onClick={() => getQuotes()} Otra forma de hacerlo.
                />
              </button>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Quote;
