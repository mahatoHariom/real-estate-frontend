import React from "react";
import { useFormContext } from "react-hook-form";
import { Input, InputProps } from "../ui/input";


interface FormInputProps extends InputProps{
  name: string;
}

const InputField: React.FC<FormInputProps> = ({ name, ...inputProps }) => {
  const { register } = useFormContext();

  return <Input {...inputProps} {...register(name)} />;
};

export { InputField };
