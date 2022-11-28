import React, { useState } from "react";

function Counter() {
  const [tags, setTags] = useState(["tag1", "tag2", "tag3"]);
  const [count, setCount] = useState(0);

  const getBadgeClasses = () => {
    return "m-2 badge bg-".concat(count > 0 ? "secondary" : "warning");
  };

  const formatCount = () => {
    return count > 0 ? count : "Zero";
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <span className={getBadgeClasses()}>{formatCount()}</span>
      <button className="btn btn-primary btn-sm" onClick={handleIncrement}>
        Increment
      </button>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  );
}

export default Counter;
