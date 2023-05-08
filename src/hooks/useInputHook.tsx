import { useState } from "react";
import { ChangeEvent } from "react";

export default (initialVal?: string) => {
  const [value, setValue] = useState<string | undefined>(initialVal);
  const handleChange: any = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  const reset = () => {
    setValue("");
  };

  return [value, handleChange, reset];
};

// import { useState, useCallback, ChangeEvent } from 'react'

// const useInput = (initialValue = '') => {
//   const [value, setValue] = useState(initialValue)

//   const onChange = useCallback(
//     (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value),
//     []
//   )

//   return [value, onChange]
// }

// export default useInput
