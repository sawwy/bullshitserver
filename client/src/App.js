import React, { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Messages from "./components/Messages";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { sentences, heroes } from "./tools/logics";
import "./App.css";

function App() {
  const [showPassed, setShowpassed] = useState(false);
  const [showDiscarded, setShowDiscarded] = useState(false);
  const { passedSentences, discardedSentences } = sentences;

  const renderHeroes = heroes.all.map((hero) => (
    <Hero hero={hero} key={hero.id} />
  ));

  return (
    <div className="container">
      <Header />
      <Navbar
        setPass={() => setShowpassed(!showPassed)}
        isPass={showPassed}
        setDisc={() => setShowDiscarded(!showDiscarded)}
        isDisc={showDiscarded}
      />
      <div className="message-area">
        {showPassed ? (
          <Messages
            className="fas fa-check-circle"
            header="No Bullshit"
            messages={passedSentences}
            color="lightgreen"
          />
        ) : (
          <div></div>
        )}
        {showDiscarded ? (
          <Messages
            className="fas fa-times-circle"
            header="Bullshit"
            messages={discardedSentences}
            color="red"
          />
        ) : (
          <div></div>
        )}
      </div>
      {renderHeroes}
      <Footer />
    </div>
  );
}

export default App;
