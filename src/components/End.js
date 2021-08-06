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
              Klicken Sie jetzt bitte auf den Button, um zur zweiten App zu
              gelangen.
              <br></br>
              <br></br>
            </p>
          </div>
        </header>
        <div id="containerButtonEnd">
          {/* <button type="submit">Zurück auf Anfang</button> */}
          {/* <a id="aGreen" href="https://inkadrum.github.io//">
            2. App-Version Starten
          </a> */}
          <a href="kaiuby.github.io">
            Umfrage starten
          </a>
        </div>
      </form>
    </div>
  );
};

export default End;
