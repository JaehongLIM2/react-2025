import React, { useState } from "react";
import axios from "axios";

function App53(props) {
  // use...(hook)들은 컴포넌트 최상단에 작성(조건문, 반복문 사용금지)
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [city, setCity] = useState("");
  const [fruit, setFruit] = useState("과일");
  const [price, setPrice] = useState(0);
  const [location, setLocation] = useState("원산지");

  function handleButton1Click() {
    axios.request({
      method: "get",
      url: "http://localhost:8080/main1/sub1",
    });
  }

  function handleButton2Click() {
    axios.request({
      method: "get",
      url: "api/main28/sub1",
    });
  }

  function handleButton3Click() {
    axios.request({
      method: "post",
      url: "/api/main28/sub2",
    });
  }

  function handleButton4Click() {
    axios.request({
      method: "get",
      url: "api/main28/sub4",
    });
  }

  function handleButton5Click() {
    axios.request({
      method: "post",
      url: "/api/main28/sub5",
    });
  }

  function handleButton6Click() {
    // axios.request({
    //   method: "get",
    //   url: "/api/main28/sub6",
    // })
    axios.get("/api/main28/sub6");
  }

  function handleButton7Click() {
    axios.get("/api/main28/sub7");
  }

  function handleButton8Click() {
    // get 방식으로 데이터 보낼 때 query string 사용
    axios.get("/api/main28/sub8?name=son&age=33");
  }

  function handleButton9Click() {
    axios.get("/api/main28/sub9?address=jeju&score=82.22");
  }

  function handleButton10Click() {
    // query string 을 직접 완성
    axios.get("/api/main28/sub10?address=서울 강남&score=82.22");
  }

  function handleButton11Click() {
    // config 의 params에 객체를 넣는 방법
    axios.get("/api/main28/sub11", {
      params: { address: "서울 신촌", score: "82.22" },
    });
  }

  function handleButton12Click() {
    axios.get("/api/main28/sub12", {
      params: { fruit: "사과 바나나 망고", price: "1222000" },
    });
  }

  function handleButton13Click() {
    const searchParams = new URLSearchParams();
    searchParams.set("name", "흥민");
    searchParams.set("age", "33");
    searchParams.set("address", "서울 강남");

    axios.get("/api/main28/sub13", {
      params: searchParams,
    });
  }

  function handleButton14Click() {
    const searchParams = new URLSearchParams();
    searchParams.set("city", "제주");
    searchParams.set("country", "한국");
    searchParams.set("id", "122121354");
    axios.get("/api/main28/sub14", {
      params: searchParams,
    });
  }

  function handleButton15Click() {
    const p = new URLSearchParams();
    p.set("name", "jh");
    p.set("age", "33");
    p.set("country", "한국");

    // axios.get("/api/main28/sub15?" + p.toString());
    axios.get("/api/main28/sub15?" + p);
  }

  function handleButton16Click() {
    const p = new URLSearchParams();
    p.set("fruit", "한라봉");
    p.set("price", "90000");
    p.set("location", "당연히 제주");
    axios.get("/api/main28/sub16?" + p.toString());
  }

  function handleButton17Click() {
    axios.get(`/api/main28/sub17?name=${name}&age=${age}&city=${city}`);
  }

  function handleButton18Click() {
    // URLSearchParams 를 연결 연산자로 붙이기
    const p = new URLSearchParams();
    p.set("name", name);
    p.set("age", age);
    p.set("city", city);
    axios.get("/api/main28/sub18?" + p);
  }

  function handleButton19Click() {
    // URLSearchParams 를 config에 넣기
    const p = new URLSearchParams();
    p.set("name", name);
    p.set("age", age);
    p.set("city", city);
    axios.get("/api/main28/sub19", { params: p });
  }

  function handleButton20Click() {
    // 객체를 config.params에 넣기
    axios.get("/api/main28/sub20", {
      params: {
        name: name,
        age: age,
        city: city,
      },
    });
  }

  function handleButton21Click() {
    axios.get(
      `/api/main28/sub21?fruit=${fruit}&price=${price}&location=${location}`,
    );
  }

  function handleButton22Click() {
    const p = new URLSearchParams();
    p.set("fruit", fruit);
    p.set("price", price);
    p.set("location", location);
    axios.get(`/api/main28/sub22?` + p);
  }

  function handleButton23Click() {
    const p = new URLSearchParams();
    p.set("fruit", fruit);
    p.set("price", price);
    p.set("location", location);
    axios.get("/api/main28/sub23", { params: p });
  }

  function handleButton24Click() {
    axios.get("/api/main28/sub24", {
      params: {
        fruit: fruit,
        price: price,
        location: location,
      },
    });
  }

  return (
    <div>
      <div>
        <div>
          <input
            type="text"
            value={fruit}
            onChange={(e) => setFruit(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      </div>
      <hr />
      <div>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
      </div>
      <hr />
      <button onClick={handleButton24Click}>연습24</button>
      <hr />
      <button onClick={handleButton23Click}>연습23</button>
      <hr />
      <button onClick={handleButton22Click}>연습22</button>
      <hr />
      <button onClick={handleButton21Click}>연습21</button>
      <hr />
      <button onClick={handleButton20Click}>요청20</button>
      <hr />
      <button onClick={handleButton19Click}>요청19</button>
      <hr />
      <button onClick={handleButton18Click}>요청18</button>
      <hr />
      <button onClick={handleButton17Click}>요청 17</button>
      <hr />
      <button onClick={handleButton16Click}>
        요청 16 + URLSearchParams 객체 활용
      </button>
      <hr />
      <button onClick={handleButton15Click}>
        요청 15 + URLSearchParams 객체 활용
      </button>
      <hr />
      <button onClick={handleButton14Click}>
        연습 14 + URLSearchParams 객체 활용
      </button>
      <hr />
      <button onClick={handleButton13Click}>
        요청 13 + URLSearchParams 객체 활용
      </button>
      <hr />
      <button onClick={handleButton12Click}>연습 12 + query string</button>
      <hr />
      <button onClick={handleButton11Click}>요청 11 + query string</button>
      <hr />
      <button onClick={handleButton10Click}>요청 10 + query string</button>
      <hr />
      <button onClick={handleButton9Click}>요청 9 + query string</button>
      <hr />
      <button onClick={handleButton8Click}>연습 8</button>
      <hr />
      <button onClick={handleButton7Click}>연습 7</button>
      <hr />
      <button onClick={handleButton6Click}>요청 6</button>
      <hr />
      <button onClick={handleButton5Click}>연습 5</button>
      <hr />
      <button onClick={handleButton4Click}>연습 4</button>
      <hr />
      <button onClick={handleButton3Click}>요청보내기 3</button>
      <hr />
      <button onClick={handleButton2Click}>요청 보내기 2</button>
      <hr />
      <button onClick={handleButton1Click}>요청 보내기</button>
    </div>
  );
}

export default App53;
