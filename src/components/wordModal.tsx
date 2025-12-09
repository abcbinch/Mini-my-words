import React from "react";

const wordModal = () => {
  return (
    <div>
      <div>
        <h1>단어 입력창</h1>
        <h2>모달</h2>
        <input type="text" placeholder="단어"></input>
        <input type="text" placeholder="발음"></input>
        <input type="text" placeholder="뜻"></input>
        <input type="text" placeholder="예문"></input>
        <input type="button">저장</input>
      </div>
    </div>
  );
};

export default wordModal;
