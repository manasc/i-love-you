import { use, useEffect, useState, useTransition } from "react";

type Props = {
    style?: React.CSSProperties;
    orientation?: "left" | "right";
    children?: React.ReactNode;
    timeout: number;
    isActive: boolean;
}

const MessageBubble = (props: Props) => {
    const {
        orientation = "left",
        children = "Hello",
    } = props;

    const [isLocalActive, setIsLocalActive] = useState(false);

    const orientationClass = orientation === "left" ? "-translate-x-[50px]" : "translate-x-[50px]";
    const tooltipClass = `absolute h-3 w-3 box-content transform rotate-45 ${orientationClass}`;

    const loader = (
        <div className={[
            "h-0.5 rounded-full bg-slate-200 overflow-hidden",
            "absolute top-0 left-0 w-full",
        ].join(" ")}>
            <div
                className="h-1 rounded-full bg-red-400 absolute top-0 left-0"
                style={{
                    transitionDuration: `${props.timeout}ms`,
                    transitionTimingFunction: "linear",
                    width: isLocalActive ? "100%" : "0%",
                }}
            />
        </div>
    )

    useEffect(() => {
        if (props.isActive) {
            setIsLocalActive(true);

            setTimeout(() => {
                setIsLocalActive(false);
            }, props.timeout);
        }
    }, [props.isActive]);

    return (
        <div
            className={[
                "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full pb-6",
                "w-full max-w-md px-2 flex justify-center items-end",
            ].join(" ")}
            style={{
                transitionDuration: '100ms',
                opacity: isLocalActive ? 1 : 0,
                transform: isLocalActive ? 'translateX(0)' : 'translateY(4px)',
            }}
        >

            <div className={[
                tooltipClass,
                "translate-y-[6px] border border-slate-400 shadow"
            ].join(" ")} />
            <div className={[
                "grid gap-0.5",
                "bg-white rounded-md p-4 border border-slate-400 shadow",
                "relative justify-center min-w-[250px]",
                "overflow-hidden"
            ].join(" ")}>
                {loader}
                {children}
            </div>
            <div className={[
                tooltipClass,
                "bg-white translate-y-[5px]"
            ].join(" ")} />
        </div>
    );
};

export default MessageBubble;
