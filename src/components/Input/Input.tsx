import { InputProps } from "./Input.types";

export default function Input({ label }: InputProps) {
  return (
    <label className="flex flex-col">
      {label}
      <input type="text" className="border-2"/>
    </label>
  );
}
