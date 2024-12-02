import React from 'react';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  name: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  label,
  checked,
  onChange,
  disabled = false,
}) => {
  return (
    <div className="mb-4 flex items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="mr-2 w-5 h-5"
        disabled={disabled}
        name={name}
      />
      <label className="text-base">{label}</label>
    </div>
  );
};

export default Checkbox;
