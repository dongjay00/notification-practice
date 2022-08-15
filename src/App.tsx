import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import addNotification from "react-push-notification";

const Page = () => {
  const buttonClick = () => {
    addNotification({
      title: "Warning",
      subtitle: "This is a subtitle",
      message: "This is a very long message",
      theme: "darkblue",
      native: true, // when using native, your OS will handle theming.
    });
  };

  useEffect(() => {
    addNotification({
      title: "Warning",
      subtitle: "This subtitle",
      message: "This a very long message",
      theme: "darkblue",
      native: true, // when using native, your OS will handle theming.
    });
  }, []);

  return (
    <div className="page">
      <button onClick={buttonClick} className="button">
        Hello world.
      </button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Page />
      </header>
    </div>
  );
}

export default App;
