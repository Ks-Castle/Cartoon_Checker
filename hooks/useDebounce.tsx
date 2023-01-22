import { SetStateAction, useState } from "react";

export const useDebounce = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  let timeout: any;

  const setDebounce = (newValue: SetStateAction<string>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => setDebouncedValue(newValue), delay);
  };

  return [debouncedValue, setDebounce];
};
