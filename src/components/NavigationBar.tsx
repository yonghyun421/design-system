import IconButton from "./IconButton";

interface INavigationBarProps {
  title?: string;
  showBackButton?: boolean;
  showCloseButton?: boolean;
  showTitle: boolean;
  onBackButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  onCloseButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  isDark?: boolean;
}

export default function NavigationBar({
  title = "",
  showBackButton,
  showCloseButton,
  showTitle,
  onBackButtonClick = () => {},
  onCloseButtonClick = () => {},
  isDark = false,
}: INavigationBarProps) {
  return (
    <div className="w-full flex justify-between">
      <div className="navigation-title-wrapper flex">
        {/* 뒤로가기 버튼 */}
        {showBackButton && (
          <IconButton
            alt="back"
            iconPath={`public/icons/arrow_left${isDark ? "" : "_white"}.svg`}
            onClick={onBackButtonClick}
          />
        )}
        {/* 타이틀 */}
        {showTitle && (
          <h1 className={`text-2xl ${isDark ? "text-white" : "text-primary"}`}>
            {title}
          </h1>
        )}
        {/* 닫기 버튼 */}
        {showCloseButton && (
          <IconButton
            alt="close"
            iconPath={`public/icons/close${isDark ? "" : "_white"}.svg`}
            onClick={onCloseButtonClick}
          />
        )}
      </div>
    </div>
  );
}
