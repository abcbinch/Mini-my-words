import React from "react";

const WordModal = () => {
  return (
    <div>
      <div>
        <h1>단어 입력창</h1>
        <h2>모달</h2>
        <input type="text" placeholder="단어" />
        <br />
        <input type="text" placeholder="발음" />
        <br />
        <input type="text" placeholder="뜻" />
        <br />
        <input type="text" placeholder="예문" />
        <br />
        <input type="button" value="저장" />
      </div>
    </div>
  );
};

export default WordModal;
