import { useState } from "react";
import { ChangeEvent } from "react";

export default (initialVal?: boolean) => {
  const [value, setValue] = useState<boolean | undefined>(initialVal);
  const handleChange: any = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(!value);
  };
  const reset = () => {
    setValue(value);
  };

  return [value, handleChange, reset];
};