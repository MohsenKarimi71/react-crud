import React, { useState } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

function App() {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 2 },
    { id: 3, value: 0 },
    { id: 4, value: 1 },
  ]);

  const handleDelete = (counterId) => {
    setCounters(counters.filter((c) => c.id !== counterId));
  };

  const handleReset = () => {
    setCounters(
      counters.map((c) => {
        c.value = 0;
        return c;
      })
    );
  };

  const handleIncrement = (counter) => {
    const newCounters = [...counters];
    const index = counters.indexOf(counter);
    newCounters[index].value++;
    setCounters(newCounters);
  };

  return (
    <React.Fragment>
      <NavBar totalCounters={counters.filter((c) => c.value > 0).length} />
      <main className="container">
        <Counters
          counters={counters}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onReset={handleReset}
        />
      </main>
    </React.Fragment>
  );
}

export default App;
