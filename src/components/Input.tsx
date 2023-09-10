export type InputProps = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  error?: string;
};

export default function Input({
  label,
  onChange,
  value,
  placeholder,
  error,
}: InputProps) {
  return (
    <label className="flex flex-col w-full">
      {label}
      <input
        type="text"
        className="p-2 border-2 w-full"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      <p className="text-red-400 text-sm">{error}</p>
    </label>
  );
}
