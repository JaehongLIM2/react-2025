import React from "react";
import axios from "axios";

function App53(props) {
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

  return (
    <div>
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
