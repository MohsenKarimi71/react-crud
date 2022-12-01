import React, { useState } from "react";
import Counter from "./counter";

function Counters() {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 2 },
    { id: 3, value: 0 },
    { id: 4, value: 1 },
  ]);

  const handleDelete = (counterId) => {
    setCounters(counters.filter((c) => c.id !== counterId));
  };
  return (
    <div>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={handleDelete}
        ></Counter>
      ))}
    </div>
  );
}

export default Counters;
