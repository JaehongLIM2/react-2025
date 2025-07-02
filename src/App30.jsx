import React, { useState } from "react";

function MyComp1() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
}

function MyComp2() {
  const [person, setPerson] = useState({ name: "", email: "" });

  function handleNameChange(e) {
    person.name = e.target.value;
    console.log(person);
    // 상태가 객체이면 참조값 비교로 다른 상태인지 확인
    setPerson(person);
  }
  function handleEmailChange(e) {
    person.email = e.target.value;
    console.log(person);
    setPerson(person);
  }
  return (
    <div>
      <input type="text" value={person.name} onChange={handleNameChange} />
      <br />
      <input type="text" value={person.email} onChange={handleEmailChange} />
    </div>
  );
}

function MyComp3() {
  const [person, setPerson] = useState({ name: "", email: "" });

  function handleNameChange(e) {
    const nextPerson = { ...person }; // spread 연산자 복사
    nextPerson.name = e.target.value;
    // 상태가 객체이면 참조값 비교로 다른 상태인지 확인
    // 따라서 객체를 복사해서 써야함
    setPerson(nextPerson);
  }
  function handleEmailChange(e) {
    const nextPerson = structuredClone(person); // 신상 메소드 사용
    nextPerson.email = e.target.value;
    setPerson(nextPerson);
  }
  return (
    <div>
      <input type="text" value={person.name} onChange={handleNameChange} />
      <br />
      <input type="text" value={person.email} onChange={handleEmailChange} />
      <button>확인</button>
    </div>
  );
}

function MyComp4() {
  const [student, setStudent] = useState({
    name: "",
    className: "",
    score: 0.0,
  });

  function handleNameChange(e) {
    const nextStudent = { ...student };
    nextStudent.name = e.target.value;
    setStudent(nextStudent);
  }

  function handleClassNameChange(e) {
    const nextStudent = { ...student };
    nextStudent.className = e.target.value;
    setStudent(nextStudent);
  }

  function handleScoreChange(e) {
    const nextStudent = { ...student };
    nextStudent.score = e.target.value;
    setStudent(nextStudent);
  }

  return (
    <div>
      <div>
        <input type="text" value={student.name} onChange={handleNameChange} />
      </div>
      <div>
        <input
          type="text"
          value={student.className}
          onChange={handleClassNameChange}
        />
      </div>
      <div>
        <input
          type="number"
          step={0.1}
          value={student.score}
          onChange={handleScoreChange}
        />
      </div>
      <button onClick={() => console.log(student)}>출력</button>
    </div>
  );
}

function App30(props) {
  return (
    <div>
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

export default App30;
