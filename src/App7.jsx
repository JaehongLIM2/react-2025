function MyComp1({ color, score, city, kids, skills, person }) {
  console.log("color", color);
  console.log("score", score);
  console.log("city", city);
  console.log("kids", kids);
  console.log("skills", skills);
  console.log("person", person);
  return null;
}

// props 의 타입은 뭐든지 가능
// String 은 ""
// 나머지는 {}

function MyComp2({ name, age, address, married }) {
  console.log("name", name);
  console.log("age", age);
  console.log("address", address);
  console.log("married", married);
  return null;
}

function App7() {
  return (
    <>
      <MyComp1
        color="yellow"
        score={123.123}
        city="seoul"
        kids={true}
        skills={["javascript", "react", "typescript"]}
        person={{ name: "son", age: 33, team: "토트넘" }}
      />
      <MyComp2
        name="lee"
        age={44}
        address={{ city: "seoul", country: "korea" }}
        married={true}
      />
    </>
  );
}
export default App7;
