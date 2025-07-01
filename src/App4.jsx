function MyComp1() {
  return <h1>Hello React!</h1>;
}

// 이름은 UpperCamelCase
// return 에 그려야할 html 코드 작성
// 가장 상위 요소가 하나인 것만 그려야함
function MyComp2() {
  return <h2>Hello Component</h2>;
}

function MyComp3() {
  return (
    <h1>
      <span>안녕</span>
      <span>컴포넌트</span>
      <button>
        <span>버튼</span>
      </button>
    </h1>
  );
}

function MyComp4() {
  return (
    <div>
      <div>이렇게</div>
      <div>감싸서 작성하거나</div>
    </div>
  );
}

function MyComp5() {
  // fragment : 가장 바깥 요소가 필요없을 때  <></> 사용
  return (
    <>
      <div>이름없는</div>
      <div>태그로도 가능</div>
    </>
  );
}

function MyComp6() {
  return (
    <div>
      <h1>제목입니다</h1>
      <p>Lorem ipsum dolor.</p>
    </div>
  );
}

function MyComp7() {
  return (
    <>
      <h2>두번째 제목</h2>
      <p>Lorem ipsum dolor.</p>
    </>
  );
}

function MyComp8() {
  return <h1>hello</h1>;
}

function MyComp9() {
  return (
    <div>
      <h1>Lorem.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
        ducimus fugit iusto nulla optio quis repudiandae temporibus! Ab
        doloremque dolorum eius fugiat quaerat. Cumque eos facilis quas quasi
        tenetur! Nam!
      </p>
    </div>
  );
}

function App4() {
  return (
    <>
      <MyComp1 />
      <MyComp2 />
      <MyComp3 />
      <MyComp4 />
      <MyComp5 />
      <MyComp6 />
      <MyComp7 />
    </>
  );
}

export default App4;
