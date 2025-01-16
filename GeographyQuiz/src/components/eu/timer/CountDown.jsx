import { useEffect, useRef, useState } from "react";

export default function CountDown({ seconds , onTimerStop }) {
  const [countdown, setCountdown] = useState(seconds);
  const timerId = useRef();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      clearInterval(timerId.current);
      onTimerStop()
    }
  }, [countdown]);

  return <h2>Time left : {countdown}</h2>;
}
