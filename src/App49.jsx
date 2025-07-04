import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";

// 연습
// /react/install
// /react/game
// /react/state

function ReactExample() {
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
            <a href="/react/install">INSTALL</a>
          </div>
          <div>
            <a href="/react/game">GAME</a>
          </div>
          <div>
            <a href="/react/state">STATE</a>
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
