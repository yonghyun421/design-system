interface INavigationBarProps {
    title?: string;
    showBackButton?: boolean;
    showCloseButton?: boolean;
    showTitle: boolean;
    onBackButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
    onCloseButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
    isDark?: boolean;
}
export default function NavigationBar({ title, showBackButton, showCloseButton, showTitle, onBackButtonClick, onCloseButtonClick, isDark, }: INavigationBarProps): import("react/jsx-runtime").JSX.Element;
export {};
