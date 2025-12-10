import React from "react";
import create from "zustand";
import MainHome from "./components/mainHome";
import type wordList from "./components/wordList";
import wordModal from "./components/wordModal";

function App() {
  return (
    <div className="App">
      <MainHome></MainHome>
    </div>
  );
}

export default App;
