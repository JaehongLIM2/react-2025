import React, { useEffect } from "react";
import {
  BrowserRouter,
  Link,
  Outlet,
  Route,
  Routes,
  NavLink,
} from "react-router";
import "./assets/mystyle.css";

// /react/learn
// /react/tutorial
// /react/docs
// /react/api

function ReactLatout() {
  useEffect(() => {
    // 마운트 될 때 실행되는 코드
    console.log("ReactLayout 컴포넌트 마운트됨");
  }, []);
  return (
    <div>
      <div>
        <div className="d-flex justify-content-between">
          NAVBAR
          <div>
            {/* 전체 페이지를 다시 마운트 하지않으려면 a 태그대신
             react router 의 Link 컴포넌트 사용*/}
            {/* NavLink : 현재 경로와 to prop 의 값이 같으면 active class 추가 함*/}
            <NavLink to="/react/learn">LEARN</NavLink>
          </div>
          <div>
            <NavLink to="/react/tutorial">TUTORIAL</NavLink>
          </div>
          <div>
            <NavLink to="/react/docs">DOCS</NavLink>
          </div>
          <div>
            <NavLink to="/react/api">API</NavLink>
          </div>
        </div>
      </div>
      {/* 자식 경로의 컴포넌트가 출력되는 곳*/}
      <Outlet></Outlet>
    </div>
  );
}

function App48(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="react" element={<ReactLatout />}>
            <Route
              path="learn"
              element={
                <div>
                  <h3>LEARN 화면</h3>
                </div>
              }
            />
            <Route
              path="tutorial"
              element={
                <div>
                  <h3>TUTORIAL 화면</h3>
                </div>
              }
            />
            <Route
              path="docs"
              element={
                <div>
                  <h3>DOCS 화면</h3>
                </div>
              }
            />
            <Route
              path="api"
              element={
                <div>
                  <h3>API 화면</h3>
                </div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App48;
