interface ITagButtonProps {
    children: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    isChecked: boolean;
}
export default function TagButton({ children, onClick, isChecked, }: ITagButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
