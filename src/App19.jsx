import React from "react";

function App19(props) {
  // on ... prop : event prop
  // 함수를 값으로 받아서 이벤트가 발생하면 함수를 실행
  function action1() {
    console.log("제목에 마우스 들어감");
  }

  function action2() {
    console.log("제목에서 마우스 나감");
  }

  const action3 = function () {
    console.log("문단에 더블 클릭됨");
  };

  const action4 = () => {
    console.log("버튼 클릭됨");
  };
  // on ... 에 들어가는 함수 이름은 handle...
  const handleButton1Click = function () {
    console.log("버튼1 클릭됨");
  };

  function handleButton2DoubleClick() {
    console.log("버튼2 더블클릭됨");
  }

  function handleButton3MouseEnter() {
    console.log("버튼3에 마우스 올라감");
  }

  function handleButton3MouseLeave() {
    console.log("버튼3에서 마우스 나감");
  }

  return (
    <div>
      <button onClick={handleButton1Click}>버튼1</button>
      <button onDoubleClick={handleButton2DoubleClick}>버튼2</button>
      <button
        onMouseEnter={handleButton3MouseEnter}
        onMouseLeave={handleButton3MouseLeave}
      >
        버튼3
      </button>

      <hr />
      <button onClick={action4} style={{ padding: "10px" }}>
        버튼
      </button>
      <p onDoubleClick={action3} className="bg-dark text-secondary">
        문단
      </p>
      <h3
        onMouseEnter={action1}
        onMouseLeave={action2}
        className="text-warning"
      >
        제목
      </h3>
    </div>
  );
}

export default App19;
