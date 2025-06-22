export const PersonContainer: React.FC<React.ComponentPropsWithRef<'span'> & {
    size?: string;
}> = (props) => (
    <span
        {...props}
        className={[
            "relative inline-flex items-center justify-center",
            props.className ?? "",
            props.size ?? "text-4xl "
        ].join(" ")}
    >
        {props.children}
    </span>
);
