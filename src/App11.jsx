function MyComp1({ color, children }) {
  return (
    <ul>
      <li>color : {color}</li>
      <li>children : {children}</li>
    </ul>
  );
}

function App11() {
  // 직접 만든 컴포넌트 : 대문자로 시작
  // html 컴포넌트(built-in component, 브라우저 컴포넌트) : 소문자로 시작
  // 브라우저 컨포넌트 props : html attribute 를 사용
  // but, class -> className, for -> htmlFor

  // style prop : style attribute 역할
  /*
  ** style attribute **
  <div style="color: red, background-color: yellow, font-size: 24px;">
  </div>

  ** style prop **
  ,<div style={color: "red", backgroundColor: "yellow", fontSize: "24px"}>
  </div>
   */

  return (
    <>
      <MyComp1 color="red">작성된 컨텐츠</MyComp1>
      <h1>제목</h1>
      <p>문단</p>
      <div>div</div>
      <a href="https://www.daum.net">daum</a>
      <img
        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTaNmnrsc-0dZ9w7CDKftB4m21zjktWgnKR6Pgglq4e6AccnfXZgL4EYVOR0t3YrqUn54zB8k1CM3ot5kF716JtjPMkpU-L15TiEQ5oXsqIrw"
        alt="호랑이 그림"
        title="호랑이 사진"
      />
      <br />
      <label htmlFor="nameInput">이름</label>
      <input type="text" id="nameInput" />
      <hr />
      <div className="content">hello</div>
      <hr />
      <div
        style={{ color: "red", backgroundColor: "yellow", fontSize: "24px" }}
      >
        스타일 props 사용
      </div>
      <hr />
      {/*  연습 : style props 을 이용해서 자신만의 버튼 만들어 보기*/}
      <button
        style={{
          color: "white",
          backgroundColor: "skyblue",
          fontSize: "24px",
          fontStyle: "bold",
        }}
      >
        나만의 버튼
      </button>
    </>
  );
}

const myAddress = "jeju";

export { myAddress };

export default App11;
