import React from "react";
import axios from "axios";

function App54(props) {
  function handleButton1Click() {
    axios.request({ method: "post", url: "/api/main29/sub1" });
  }

  function handleButton2Click() {
    axios.post("/api/main29/sub2"); // 더 자주 사용됨
  }

  function handleButton3Click() {
    axios.post("/api/main29/sub3");
  }

  function handleButton4Click() {
    // 두 번째 파라미터는 json 으로 직렬화(stringify, encoding)
    axios.post("/api/main29/sub4", { name: "son", age: 44 });
  }

  function handleButton5Click() {
    // 연습 : 적절한 코드 작성
    axios.post("/api/main29/sub5", {
      address: "seoul",
      score: 88.12,
      country: "korea",
    });
  }

  function handleButton6Click() {
    axios.post("/api/main29/sub6", {
      val1: "string", // string
      val2: 99, // number
      val3: 77.12, // number
      val4: true, // boolean
      val5: false, // boolean
      val6: null,
    });
  }

  function handleButton7Click() {
    axios.post("/api/main29/sub7", {
      address: "seoul",
      score: 88.12,
      age: 22,
      married: false,
    });
  }

  function handleButton8Click() {
    axios.post("/api/main29/sub8", {
      address: "seoul",
      age: 22,
      fruits: ["apple", "banana", "lemon", "mango"], // array
    });
  }

  function handleButton9Click() {
    axios.post("/api/main29/sub9", {
      name: "seoul",
      teams: ["서울", "런던", "첼시"],
      person: {
        // object
        name: "흥민",
        address: "서울",
        age: 55,
      },
    });
  }

  function handleButton10Click() {
    axios.post("/api/main29/sub10", {
      cityList: [
        "고베",
        "오사카",
        "미에",
        "나라",
        "에히메",
        "와카야마",
        "교토",
      ],
      team: {
        name: "skt t1",
        player: ["faker", "doran", "orner", "gumayushi"],
        country: "korea",
      },
    });
  }

  function handleButton11Click() {
    axios.post("/api/main29/sub11", ["java", "boot", "spring"]);
  }

  function handleButton12Click() {
    axios.post("/api/main29/sub12", [
      {
        name: "son",
        age: 11,
        address: "seoul",
      },
      {
        name: "cha",
        age: 12,
        address: "daegu",
      },
      {
        name: "park",
        age: 13,
        address: "jeju",
      },
    ]);
  }

  function handleButton13Click() {
    axios.post("/api/main29/sub13", {
      // string
      nickName: "흥민",
      // object
      team: {
        name: "토트넘",
        location: "런던",
      },
      // number
      age: 33,
      // boolean
      married: false,
      // array
      address: ["서울", "런던", "베를린"],
    });
  }

  function handleButton14Click() {
    axios.post("/api/main29/sub14", {
      person: {
        name: "흥민",
        age: 55,
      },
      city: "서울",
      score: 99.22,
      checked: true,
      fruits: ["apple", "banana", "lemon", "mango"],
    });
  }

  return (
    <div>
      <button onClick={handleButton14Click}>post 14</button>
      <hr />
      <button onClick={handleButton13Click}>post 13</button>
      <hr />
      <button onClick={handleButton12Click}>post 12 w/ array of objects</button>
      <hr />
      <button onClick={handleButton11Click}>post 11 array</button>
      <hr />
      <button onClick={handleButton10Click}>post 10 /w data(object)</button>
      <hr />
      <button onClick={handleButton9Click}>post 9 /w data(object)</button>
      <hr />
      <button onClick={handleButton8Click}>post 8 w/ data(array)</button>
      <hr />
      <button onClick={handleButton7Click}>
        post 7 w/ data(boolean, String, number
      </button>
      <hr />
      <button onClick={handleButton6Click}>
        post 6 w/ data(boolean, string, number, null
      </button>
      <hr />
      <button onClick={handleButton5Click}>연습 post 5 w/ data</button>
      <hr />
      <button onClick={handleButton4Click}>post 4 w/ data</button>
      <hr />
      <button onClick={handleButton3Click}>post 3</button>
      <hr />
      <button onClick={handleButton2Click}>post 2</button>
      <hr />
      <button onClick={handleButton1Click}>post 1</button>
    </div>
  );
}

export default App54;
