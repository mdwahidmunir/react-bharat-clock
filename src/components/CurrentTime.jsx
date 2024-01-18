import { useEffect } from "react";
import { useState } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <p className="lead">
      The current time is : {time.toLocaleDateString()} --{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
