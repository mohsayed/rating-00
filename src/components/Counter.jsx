import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  //   intialize with function
  //   const [count, setCount] = useState(() => {
  //     console.log("Initializing count...");
  //     return 4;
  //   });

  //simple stright way
  const increment = () => {
    setCount(count + 1);
  };

  // complex way
  const AddToCounter = () => {
    // x is current conunt value, return will abdate count to new value
    setCount((x) => {
      return x + 1;
    });
  };

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={AddToCounter}>Increment</button>
    </>
  );
};

export default Counter;
