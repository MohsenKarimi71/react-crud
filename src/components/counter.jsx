import React, { useState } from "react";

function Counter(props) {
  const [value, setValue] = useState(props.value);

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
      <button className="btn btn-primary btn-sm" onClick={handleIncrement}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
