"use client";

import { Label, Select } from "flowbite-react";
import { FC } from "react";
interface CustomSelectProps {
  options: string[];

  onChange: (value: string) => void;
  value: string;
}
export const CustomSelect: FC<CustomSelectProps> = ({
  options,

  value,
  onChange,
}) => {
  return (
    <div className="max-w-md ">
      <Select value={value} onChange={(e) => onChange(e.target.value)}>
        <option selected>Choose a type</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </Select>
    </div>
  );
};

export default CustomSelect;
