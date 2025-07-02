import React, { useState } from "react";

function MyComp1() {
  const [person, setPerson] = useState({
    name: "son",
    address: {
      city: "San Francisco",
      country: "Canada",
    },
  });

  function handelNameChange(e) {
    setPerson({ ...person, name: e.target.value });
  }

  function handelCityChange(e) {
    // const newPerson = { ...person }; // 좋은 코드 아님
    const newPerson = structuredClone(person); // 이렇게 써야함
    newPerson.address.city = e.target.value;
    setPerson(newPerson);
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="이름"
          value={person.name}
          onChange={handelNameChange}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="도시"
          value={person.address.city}
          onChange={handelCityChange}
        />
      </div>
      <div>
        <input type="text" placeholder="국가" value={person.address.country} />
      </div>
    </div>
  );
}

function App31(props) {
  return (
    <div>
      <MyComp1 />
    </div>
  );
}

export default App31;
