import { useState, useEffect } from "react";

function getStorageValue(key, defaultValue, objectType) {
  // getting stored value
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  let parsed = objectType.from(initial);
  return parsed || defaultValue;
}

export const useLocalStorageObject = (key, defaultValue, objectType) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue, objectType);
  });

  useEffect(() => {
    // storing input name
    console.log("stored value");
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
