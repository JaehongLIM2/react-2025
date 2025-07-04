import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";

// /react/learn
// /react/tutorial
// /react/docs
// /react/api

function ReactLatout() {
  return (
    <div>
      <div>
        <div className="d-flex justify-content-between">
          NAVBAR
          <div>
            <a href="/react/learn">LEARN</a>
          </div>
          <div>
            <a href="/react/tutorial">TUTORIAL</a>
          </div>
          <div>
            <a href="/react/docs">DOCS</a>
          </div>
          <div>
            <a href="/react/api">API</a>
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
