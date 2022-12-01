import React, { useState } from "react";

function Counter(props) {
  const [value, setValue] = useState(props.counter.value);

  const getBadgeClasses = () => {
    return "m-2 badge bg-".concat(value > 0 ? "secondary" : "warning");
  };

  const formatValue = () => {
    return value > 0 ? value : "Zero";
  };

  const handleIncrement = () => {
    setValue(value + 1);
  };

  return (
    <div>
      <span className={getBadgeClasses()}>{formatValue()}</span>
      <button onClick={handleIncrement} className="btn btn-primary btn-sm">
        Increment
      </button>
      <button
        onClick={() => props.onDelete(props.counter.id)}
        className="btn btn-danger btn-sm m-2"
      >
        Delete
      </button>
    </div>
  );
}

export default Counter;
