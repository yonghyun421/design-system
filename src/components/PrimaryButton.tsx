type PrimaryButtonTheme = "dark" | "light" | "social" | "text";

interface IPrimaryButtonProps {
  theme: PrimaryButtonTheme;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: string;
  isDisabled?: boolean;
}

const dark = "bg-primary text-white";
const light = "bg-white text-primary";
const social = "bg-social text-white";
const text = "bg-transparent text-white";
const disabled = "disabled:bg-mono100 disabled:text-mono200";

const color: Record<PrimaryButtonTheme, string> = {
  dark,
  light,
  social,
  text,
};

export default function PrimaryButton({
  theme,
  onClick,
  children,
  isDisabled,
}: IPrimaryButtonProps) {
  return (
    <button
      className={`w-full h-[59px] ${color[theme]} ${
        isDisabled ? disabled : ""
      } rounded-primary-button`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
