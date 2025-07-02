import React, { useState } from "react";

function MyComp1(props) {
  const [text, setText] = useState("기본 값");

  function handleInputChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />
    </div>
  );
}

function MyComp2() {
  // input 값이 입력되도록
  // 리셋 버튼 클릭시 input의 value가 "" 되도록
  const [text, setText] = useState("");
  function handleInputChange(e) {
    setText(e.target.value);
  }

  function handleResetClick() {
    setText("");
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />
      <button onClick={handleResetClick}>리셋</button>
    </div>
  );
}

function App25(props) {
  return (
    <div>
      <MyComp2 />
      <hr />
      <MyComp1 />
    </div>
  );
}

export default App25;
