import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputText = ({ label, type }: Props) => {
  return (
    <label className="flex flex-col w-full">
      <span>{label}</span>
      <input
        type={type}
        className="border border-gray-200 h-10 px-4 outline-none"
      />
    </label>
  );
};

export default InputText;
