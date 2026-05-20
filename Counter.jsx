import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Counter mounted");
  }, []);

  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

export default Counter;