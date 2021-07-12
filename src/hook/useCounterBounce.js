import { useEffect, useState, useRef } from "react";

export default function useCounterBounce(state) {
  const [counter, setCounter] = useState(state);

  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCounter((counter) => {
        if (counter.current < counter.min || counter.current > counter.max) {
          counter.step *= -1;
        }
        counter.current += counter.step;
        return Object.assign({}, counter);
      });
    }, counter.ms);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [counter]);

  return counter;
}
