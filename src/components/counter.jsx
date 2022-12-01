import React from "react";

function Counter(props) {
  const getBadgeClasses = () => {
    return "m-2 badge bg-".concat(
      props.counter.value > 0 ? "secondary" : "warning"
    );
  };

  const formatValue = () => {
    return props.counter.value > 0 ? props.counter.value : "Zero";
  };

  return (
    <div>
      <span className={getBadgeClasses()}>{formatValue()}</span>
      <button
        onClick={() => props.onIncrement(props.counter)}
        className="btn btn-primary btn-sm"
      >
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
