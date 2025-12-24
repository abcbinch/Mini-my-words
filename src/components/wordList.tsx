import React from "react";
import "../css/wordList.css";

const WordList = () => {
  return (
    <div>
      <h1>단어 목록</h1>
      <h2>리스트</h2>
      <div className="add">추가</div>
      <ul>
        <li>단어</li>
        <li>단어</li>
        <li>단어</li>
      </ul>
    </div>
  );
};

export default WordList;
