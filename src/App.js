import "./styles.css";
import React, { useState } from "react";
import { Chatbot } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import MessageParser from "./chatbot/MessageParser";
import config from "./chatbot/config";
import ActionProvider from "./chatbot/ActionProvider";
import { ReactComponent as Button } from "./assets/robot.svg";

function App({ children }) {
  const [showBot, setBot] = useState(true);

  function handleBot() {
    const botState = !showBot;
    setBot(botState);
  }

  return (
    <div className="App">
      <div className="header">
        <h4>메인페이지@@</h4>
      </div>
      {showBot && (
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      )}
      <div className="footer">
        <p>footer@@</p>
      </div>
      <button className="app-chatbot-button" onClick={handleBot}>
        <Button className="app-chatbot-button-icon" />
      </button>
    </div>
  );
}
export default App;
