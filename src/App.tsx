import React, { useState, type FC } from "react";

const Counter: FC = () => {
  const [count, setCount] = useState(0);
  const increment = (): void => {
    setCount(count + 1);
  };

  console.log("Change for test cases");

  return (
    <div>
      Current value: {count}
      <button onClick={increment} data-testid="increment">
        Increment
      </button>
    </div>
  );
};

export default Counter;
