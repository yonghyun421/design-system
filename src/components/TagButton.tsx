interface ITagButtonProps {
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isChecked: boolean;
}

export default function TagButton({
  children,
  onClick,
  isChecked,
}: ITagButtonProps) {
  const buttonStyle = isChecked
    ? "text-primary bg-white"
    : "text-white bg-dark-opacity";
  return (
    <button
      onClick={onClick}
      className={`text-sm font-medium px-[10px] border border-white h-[33px]  rounded-tag-button bg-dark-opacity ${buttonStyle}`}
    >
      {children}
    </button>
  );
}
