import { useEffect, useState } from "react";

const useDebounce = (value, delay = 500) => {
  const [debounceValue, setDebounceValue] = useState();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debounceValue;
};

export default useDebounce;
