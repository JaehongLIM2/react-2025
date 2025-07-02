import React from "react";

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

function App29(props) {
  return (
    <div>
      <MyComp2 />
      <hr />
      <MyComp1 />
    </div>
  );
}

export default App29;
