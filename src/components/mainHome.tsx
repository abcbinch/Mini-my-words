import React from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import WordList from "./wordList";
import WordModal from "./wordModal";

const MainHome = () => {
  return (
    <div>
      <h1>영단어장</h1>
      <h2>메인 페이지</h2>
      <Link to="/wordList">단어장</Link>
      <br />
      <Link to="/wordModal">추가하기</Link>
    </div>
  );
};

export default MainHome;
