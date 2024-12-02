import React from 'react';
import { FieldValues, UseFormRegister, FieldErrors } from 'react-hook-form';

interface TextAreaProps {
  label: string;
  name: string;
  placeholder: string;
  register: UseFormRegister<FieldValues> | any ;
  errors: FieldErrors<FormData> | any;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  disabled?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  name,
  placeholder,
  register,
  errors,
  value,
  onChange,
  disabled = false,
}) => {
  return (
    <div className="mb-4">
      <label className="text-xl">{label}</label>
      <textarea
        {...register(name)}
        placeholder={placeholder}
        className="w-full p-2 border rounded-lg mt-1"
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {errors?.[name] && <p className="text-red-500">{errors?.[name]?.message}</p>}
    </div>
  );
};

export default TextArea;
