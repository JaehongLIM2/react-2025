// 처음 만드는 component
// component : 함수
// component(함수명) : UpperCamelCase
function MyAwesomeButton() {
  // 함수 코드들
  // js 주석
  /*
  js 주석
   */
  // return 에 : dom 에 그려야할 코드 작성
  return (
    <button
      style={{
        backgroundColor: "green",
        color: "white",
        padding: "15px",
        border: "2px solid black",
      }}
    >
      너무 잘 만든 버튼
    </button>
  );
}

function MyNewHeader() {
  return (
    <h1
      style={{
        color: "salmon",
        border: "2px solid black",
      }}
    >
      {/* jsx 주석*/}
      {/* ctrl + / : 단축키 */}
      나의 새로 작성 한 완벽한 제목
    </h1>
  );
}

function App3() {
  return (
    <>
      <h1>Lorem ipsum dolor.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        eligendi libero nihil rem. Accusamus accusantium asperiores atque beatae
        enim esse, facilis fugit, incidunt laboriosam omnis quibusdam quidem rem
        similique vero.
      </p>
      <button>Lorem.</button>
      <button>Eveniet?</button>
      <hr />
      <button
        style={{
          background: "red",
          color: "white",
          border: "1px solid black",
          padding: "10px",
        }}
      >
        너무 잘 만든 버튼
      </button>
      <MyAwesomeButton />
      <MyNewHeader />
    </>
  );
}

export default App3;
