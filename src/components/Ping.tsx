import React from "react";

type Props = React.ComponentPropsWithRef<'span'> & {
    index: number
}

export default function Ping(props: Props) {
    const animationDelay = `${props.index * 400}ms`;

    return (
        <span
            className={`animate-ping-heart absolute inline-flex rounded-full bg-red-500`}
            style={{
                animationDelay,
                height: 0,
                width: 0,
            }}
            {...props}
        />
    );
}
