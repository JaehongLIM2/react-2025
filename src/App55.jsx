import React, { useState } from "react";
import axios from "axios";

function App55(props) {
  const [myFile, setMyFile] = useState("");

  function handleButton1Click() {
    axios.put("/api/main30/sub1");
  }

  function handleButton2Click() {
    axios.delete("/api/main30/sub2");
  }

  function handleButton3Click() {
    axios.put("/api/main30/sub3");
  }

  function handleButton4Click() {
    axios.delete("/api/main30/sub4");
  }

  function handleButton5Click() {
    axios.put("/api/main30/sub5", {
      name: "John Doe",
      team: {
        name: "Washington",
        location: "New York",
        country: "United States",
      },
      age: 22,
      married: true,
      address: ["Tokyo", "Osaka", "Seoul"],
    });
  }

  function handleButton6Click() {
    axios.delete("/api/main30/sub6", {
      params: {
        name: "John Doe",
        location: "New York",
        country: "United States",
      },
    });
  }

  function handleButton7Click() {
    // file 전송시 postForm, 또는 putForm
    axios.postForm("api/main30/sub7", {
      name: "흥민 손",
      age: 77,
      myFile: myFile,
    });
  }

  return (
    <div>
      <div>
        <input
          type="file"
          value={myFile}
          onChange={(e) => setMyFile(e.target.value)}
        />
        <hr />
        <button onClick={handleButton7Click}>7 POST w/ file</button>
      </div>
      <button onClick={handleButton6Click}>6 DELETE 요청</button>
      <hr />
      <button onClick={handleButton5Click}>5 PUT 요청</button>
      <hr />
      <button onClick={handleButton4Click}>4 DELETE 요청</button>
      <hr />
      <button onClick={handleButton3Click}>3 PUT 요청</button>
      <hr />
      <button onClick={handleButton2Click}>2 DELETE 요청</button>
      <hr />
      <button onClick={handleButton1Click}>1 PUT 요청</button>
    </div>
  );
}

export default App55;
