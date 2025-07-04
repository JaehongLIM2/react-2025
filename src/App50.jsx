import React from "react";
import {
  BrowserRouter,
  Link,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from "react-router";
import { Button } from "react-bootstrap";

function MainLayout() {
  // useNavigate() hook 사용 :
  // Link, NavLink 사용 없이 코드로 경로를 이동하는 방법
  const navigate = useNavigate();

  function handleABCClick() {
    navigate("/abc");
  }

  function handleQWEClick() {
    navigate("/qwe");
  }

  function handleXYZClick() {
    navigate("/xyz");
  }

  return (
    <div>
      <div className="d-flex justify-content-around">
        <div>NAVBAR</div>
        <div>
          <Link to="/abc">abc</Link>
        </div>
        <div>
          <Link to="/xyz">xyz</Link>
        </div>
        <div>
          <Link to="/qwe">qwe</Link>
        </div>
      </div>

      <div className="d-flex justify-content-around">
        <div>NAVBAR</div>
        <div>
          <Button onClick={handleABCClick} variant="link">
            abc
          </Button>
        </div>
        <div>
          <Button onClick={handleXYZClick} variant="link">
            xyz
          </Button>
        </div>
        <div>
          <Button onClick={handleQWEClick} variant="link">
            qwe
          </Button>
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
}

function App50(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              path="abc"
              element={
                <div>
                  <h3>ABC</h3>
                </div>
              }
            />
            <Route
              path="xyz"
              element={
                <div>
                  <h3>XYZ</h3>
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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App50;
