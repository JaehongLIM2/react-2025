import React from "react";
import { Button } from "react-bootstrap";

function AwesomeButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px",
        backgroundColor: "black",
        color: "white",
        fontSize: "2rem",
      }}
    >
      {children}
    </button>
  );
}
function AwesomeHeader({ children, onDoubleClick }) {
  return (
    <h1
      onDoubleClick={onDoubleClick}
      style={{
        padding: "10px",
        color: "white",
        fontSize: "2rem",
        backgroundColor: "red",
      }}
    >
      {children}
    </h1>
  );
}

function App20(props) {
  return (
    <div>
      {/*연습 : AwesomeHeader 를 만들고 마우스가 더블클릭하면 콘솔에 메세지 출력*/}
      <AwesomeHeader
        onDoubleClick={() => console.log("최고의 머릿말 더블클릭")}
      >
        최고의 머릿말
      </AwesomeHeader>
      <AwesomeHeader
        onDoubleClick={() => console.log("최고의 머릿말 더블클릭2")}
      >
        최고의 머릿말2
      </AwesomeHeader>
      <hr />
      <button onClick={() => console.log("보통의 버튼 클릭")}>
        브라우저 컴포넌트 버튼
      </button>
      <AwesomeButton onClick={() => console.log("멋진버튼1 클릭")}>
        멋진 버튼1
      </AwesomeButton>
      <Button
        variant="outline-danger"
        onClick={() => {
          console.log("부트스트랩 버튼 클릭");
        }}
      >
        부트스트랩 버튼
      </Button>
    </div>
  );
}

export default App20;
