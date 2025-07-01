// import : 가져오기
// named export 는 이름을 명시해서 import
import { MyAwesomeButton, myAddress as MA1 } from "./App12.jsx";
import { myAddress as MA2 } from "./App11.jsx"; // .jsx(확장자) 생략 가능

// default export 한 값은 아무 이름으로 import됨
import App12 from "./App12.jsx";

function App13() {
  return (
    <>
      <h3>13번 파일</h3>
      <MyAwesomeButton color="skyblue">저장</MyAwesomeButton>
      <hr />
      {MA1}
      {MA2}
      <hr />
      <App12 />
    </>
  );
}

export default App13;
