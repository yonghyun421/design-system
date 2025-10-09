type PrimaryButtonTheme = "dark" | "light" | "social" | "text";
interface IPrimaryButtonProps {
    theme: PrimaryButtonTheme;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    children: string;
    isDisabled?: boolean;
}
export default function PrimaryButton({ theme, onClick, children, isDisabled, }: IPrimaryButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
