import React, { useEffect } from "react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Outlet,
  Route,
  Routes,
} from "react-router";
import "./assets/mystyle.css";

// 연습
// /react/install
// /react/game
// /react/state

// 연습 : 아래 경로에 같은 sidebar 가 존재하도록 코드 작성
// 연습 : 경로 이동 시 모든 컴포넌트가 다시 마운트 되지않도록 코드 수정
// 연습 : 현재 경로와 Link의 to prop이 같으면 그려지는 a 요소에 active class 추가하기

function ReactExample() {
  useEffect(() => {
    console.log("ReactExample 마운트 됨");
  }, []);
  return (
    <div>
      {/*상단 제목 영역*/}
      <div className="bg-info">
        <h1>REACT 에 관하여 . . .</h1>
      </div>

      {/*아래 두 영역은 가로 배치*/}
      <div className="d-flex">
        <div className="d-flex flex-column me-5 gap-5 ">
          <div>
            <NavLink to="/react/install">INSTALL</NavLink>
          </div>
          <div>
            <NavLink to="/react/game">GAME</NavLink>
          </div>
          <div>
            <NavLink to="/react/state">STATE</NavLink>
          </div>
        </div>
        <div className="flex-grow-1 bg-primary-subtle">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

function App49(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="react" element={<ReactExample />}>
            <Route
              path="install"
              element={
                <div>
                  <h3>INSTALL의 설명</h3>
                </div>
              }
            />
            <Route
              path="game"
              element={
                <div>
                  <h3>GAME의 설명</h3>
                </div>
              }
            />
            <Route
              path="state"
              element={
                <div>
                  <h3>STATE의 설명</h3>
                </div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App49;
