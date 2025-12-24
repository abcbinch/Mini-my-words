import React from "react";
import MainHome from "./components/mainHome";
import WordList from "./components/wordList";
import WordModal from "./components/wordModal";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHome />}></Route>
          <Route path="/wordList" element={<WordList />}></Route>
          <Route path="/wordModal" element={<WordModal />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
