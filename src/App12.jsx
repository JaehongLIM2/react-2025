function MyAwesomeButton({ color, children }) {
  return (
    <button
      style={{
        color: color,
        backgroundColor: "red",
        fontSize: "20px",
        border: "1px solid black",
      }}
    >
      {children}
    </button>
  );
}

function App12() {
  return (
    <>
      <MyAwesomeButton color="blue">등록</MyAwesomeButton>
      <hr />
      <MyAwesomeButton color="yellow">수정</MyAwesomeButton>
    </>
  );
}

const myAddress = "seoul";
// export : 현재 파일의 함수(변수, 값)를 내보내기
// named export
export { MyAwesomeButton, myAddress };

// default export
export default App12;
