import React from "react";
import Counter from "./counter";

function Counters(props) {
  return (
    <div>
      <button onClick={props.onReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      {props.counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={props.onDelete}
          onIncrement={props.onIncrement}
        ></Counter>
      ))}
    </div>
  );
}

export default Counters;
