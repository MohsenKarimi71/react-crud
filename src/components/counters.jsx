import React from "react";
import Counter from "./counter";

function Counters() {
  const counters = [
    { id: 1, value: 0 },
    { id: 2, value: 2 },
    { id: 3, value: 0 },
    { id: 4, value: 1 },
  ];
  return (
    <div>
      {counters.map((counter) => (
        <Counter key={counter.id} value={counter.value} selected></Counter>
      ))}
    </div>
  );
}

export default Counters;
