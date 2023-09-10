import { InputProps } from "./Input.types";

export default function Input({ label }: InputProps) {
  return (
    <label className="flex flex-col gap-2">
      {label}
      <input type="text" />
    </label>
  );
}
