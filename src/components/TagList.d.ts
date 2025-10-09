interface ITagListProps<T extends string> {
    tagList: T[];
    onTagClick: (tag: T) => void;
}
export default function TagList<T extends string>({ tagList, onTagClick, }: ITagListProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
