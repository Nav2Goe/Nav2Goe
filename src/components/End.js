import React from "react";
import "../Style.css";
import Logo from "./Logo.js";

const End = (props) => {
  // Button Click Handler einfügen

  return (
    <div>
      <form>
        <header className="Startseite-header">
          <h1 className="logo">Nav2Gö</h1>
          <div id="endText">
            <p>
              {" "}
              <br></br>Vielen Dank für die Teilnahme!{" "}
            </p>
            <p>
              Klicken Sie jetzt bitte auf den Button, um zur  Umfrage zu
              gelangen.
              <br></br>
              <br></br>
            </p>
          </div>
        </header>
        <div id="containerButtonEnd">
          {/* Umfrage D */}
          <a id="aGreen" href="https://www.survio.com/survey/d/X8Q4D7I6Y7T7F1N3H">
            Zur Umfrage!
          </a>
        </div>
      </form>
    </div>
  );
};

export default End;
