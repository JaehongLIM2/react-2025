import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";

function LearnPage() {
  return (
    <div>
      <h3>learn page 입니다</h3>
    </div>
  );
}

function TutorialPage() {
  return (
    <div>
      <h3> tutorial page 입니다</h3>
    </div>
  );
}

function InstallPage() {
  return (
    <div>
      <h3> install page 입니다</h3>
    </div>
  );
}

function ReaferencePage() {
  return (
    <div>
      <h3> reference page 입니다</h3>
    </div>
  );
}

function App42(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/learn" element={<LearnPage />}></Route>
          <Route path="/tutorial" element={<TutorialPage />}></Route>
          <Route path="/install" element={<InstallPage />}></Route>
          <Route path="/reference/react" element={<ReaferencePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App42;
