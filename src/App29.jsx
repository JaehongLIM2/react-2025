import React, { useState } from "react";

function MyComp1() {
  const arr = ["java", "react", "css"];

  const paras = arr.map((item) => <p>{item}</p>);

  console.log(paras);

  return <div>{paras}</div>;
}

function MyComp2() {
  const datas = [9, 5, 1, 0];

  return (
    <ul>
      {datas.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}

function MyComp3() {
  const [datas, setDatas] = useState(["java", "react", "spring"]);

  function handleButtonClick() {
    datas.push("boot");
    console.log(datas);
    // react 는 배열을 참조값 비교로 상태가 변경되었는지 확인
    // 따라서 이전 상태 배열을 복사한 새 배열을 상태 변경시 사용해야함
    setDatas(datas);
  }

  return (
    <div>
      <ul>
        {datas.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button onClick={handleButtonClick}>추가</button>
    </div>
  );
}

function MyComp4() {
  const [datas, setDatas] = useState(["java", "react", "css"]);

  function handleButtonClick() {
    // react 는 배열을 참조값 비교로 상태가 변경되었는지 확인
    // 따라서 이전 상태 배열을 복사한 새 배열을 상태 변경시 사용해야함
    const nextDatas = [...datas, "boots"];
    setDatas(nextDatas);
  }

  return (
    <div>
      <ul>
        {datas.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button onClick={handleButtonClick}>추가</button>
    </div>
  );
}

function MyComp5() {
  const [list, setList] = useState(["곰", "독수리", "벌"]);

  function handlerBearButtonClick1() {
    const nextList = [...list, "곰"];
    setList(nextList);
  }

  function handlerEagleButtonClick2() {
    const nextList = [...list, "독수리"];
    setList(nextList);
  }

  function handlerBeeButtonClick3() {
    const nextList = [...list, "벌"];
    setList(nextList);
  }

  function handleDeleteClick() {
    setList(list.slice(0, -1));
  }

  return (
    <div>
      <button onClick={handlerBearButtonClick1}>곰 추가</button>
      <button onClick={handlerEagleButtonClick2}>독수리 추가</button>
      <button onClick={handlerBeeButtonClick3}>벌 추가</button>
      <button onClick={() => setList([...list, "사자"])}>사자 추가</button>
      <button onClick={handleDeleteClick}>마지막 요소 지우기</button>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function App29(props) {
  return (
    <div>
      <MyComp5 />
      <hr />
      <MyComp4 />
      <hr />
      <MyComp3 />
      <hr />
      <MyComp2 />
      <hr />
      <MyComp1 />
    </div>
  );
}

export default App29;
