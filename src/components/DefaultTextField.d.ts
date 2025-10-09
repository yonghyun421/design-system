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
export default function DefaultTextField({ id, iconPath, iconAlt, onChange, onIconClick, errorMessage, placeholder, value, isError, }: IDefaultTextFieldProps): import("react/jsx-runtime").JSX.Element;
export {};
