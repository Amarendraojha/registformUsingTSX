import React from 'react';
import { FieldValues, UseFormRegister, FieldErrors } from 'react-hook-form';

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>|any;
  errors: FieldErrors;
  disabled?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  register,
  errors,
  disabled = false,
}) => {
  return (
    <div className="w-full md:w-[48%] mb-4">
      <label className="text-xl">{label}</label>
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className="w-full p-2 border rounded-lg mt-1"
        disabled={disabled}
      />
      {errors?.[name]?.type === "required" && (<p className="text-red-500">This field is required</p>)}
      {errors?.[name]?.type === "maxLength" && (<p className="text-red-500">{label} cannot exceed the max length</p>)}
      {errors?.[name]?.type === "pattern" && (<p className="text-red-500">{label} is invalid</p>)}
    </div>
  );
};

export default InputField;
