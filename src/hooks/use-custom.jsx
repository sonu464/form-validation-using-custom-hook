import { useState } from "react";

const useCustom = (validData) => {
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const inputIsValid = validData(inputValue);
  const hasError = !inputIsValid && isTouched;

  // Change Handler
  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  // Blur Handler
  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setInputValue("");
    setIsTouched(false);
  };

  return {
    value: inputValue,
    inputIsValid,
    hasError,
    changeHandler: inputChangeHandler,
    blurHandler: inputBlurHandler,
    reset,
  };
};

export default useCustom;
