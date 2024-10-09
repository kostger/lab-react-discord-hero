import "./App.css";
import react from "react";
import discord from "./assets/discord-logo-white.png";
import menu from "./assets/menu-icon.png";
import characters from "./assets/discord-background.png";

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <img className="DiscordLogo" src={discord} alt="discord" />
        <img className="Menu" src={menu} alt="menu" />
      </div>
      <div className="Hero">
        <div>
          <h1>IMAGINE A PLACE...</h1>
          <h2>
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </h2>
          <div className="buttonContainer">
            <button>Download for Mac</button>
            <button>Open Discord in your browser</button>
          </div>
        </div>
        <div className="Characters">
          <img src={characters} alt="characters" />
        </div>
      </div>
    </div>
  );
}

export default App;
