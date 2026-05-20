import { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <>
      <h2>Timer: {time} sec</h2>
    </>
  );
}

export default Timer;