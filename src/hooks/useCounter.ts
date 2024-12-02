import { useEffect, useState } from "react";

export function useCounter(targetValue: string, duration: number = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const end = parseInt(targetValue.replace("+", ""));
    if (end === 0) return;

    const increment = end / (duration / 50);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(current));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [targetValue, duration]);

  return count;
}
