import { useState } from "react";

import ErrorMessage from "./ErrorMessage";
import IconButton from "./IconButton";

interface IDefaultTextFieldProps {
  id: string;
  iconPath: string;
  iconAlt: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onIconClick: React.MouseEventHandler<HTMLButtonElement>;
  errorMessage: string;
  placeholder: string;
  value: string;
  isError: boolean;
}

export default function DefaultTextField({
  id,
  iconPath,
  iconAlt,
  onChange,
  onIconClick,
  errorMessage,
  placeholder,
  value,
  isError,
}: IDefaultTextFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const borderColor = isFocused
    ? "border-secondary"
    : !value
    ? "border-mono300"
    : "border-primary";
  return (
    <div className="relative">
      <div
        className={`text-primary border-b ${borderColor}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <input
          type="text"
          id={id}
          className="outline-none"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {!!value && (
          <IconButton onClick={onIconClick} alt={iconAlt} iconPath={iconPath} />
        )}
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}
