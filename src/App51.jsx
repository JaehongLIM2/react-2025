import React from "react";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from "react-router";
import { Button } from "react-bootstrap";

function MyLayout() {
  const navigate = useNavigate();

  function handleHOMEClick() {
    navigate("/home");
  }

  function handleQWEClick() {
    navigate("/qwe");
  }

  function handleASDClick() {
    navigate("/asd");
  }

  return (
    <div>
      <div>
        <Button onClick={handleHOMEClick} variant="outline-info">
          HOME
        </Button>
        <Button onClick={handleQWEClick} variant="outline-info">
          QWE
        </Button>
        <Button onClick={handleASDClick} variant="outline-info">
          ASD
        </Button>
        {/* useNavigate() 에 '-1' 을 넣으면
         history(방문 기록) 기준으로 이동하기*/}
        <Button onClick={() => navigate(-1)}>뒤로가기</Button>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

function App51(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyLayout />}>
            <Route
              index
              element={
                <div>
                  <h3>HOME</h3>
                </div>
              }
            />
            <Route
              path="home"
              element={
                <div>
                  <h3>HOME</h3>
                </div>
              }
            />
            <Route
              path="qwe"
              element={
                <div>
                  <h3>QWE</h3>
                </div>
              }
            />
            <Route
              path="asd"
              element={
                <div>
                  <h3>ASD</h3>
                </div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App51;
