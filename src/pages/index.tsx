import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import MessageBubble from "../components/MessageBubble";
import { PersonContainer } from "../components/PersonContainer";
import quotesInfo from "../data/quotes.json";
import DefaultLayout from "../layouts/DefaultLayout";
import { Timer } from "../utils/Timer";
import { getRandomInt } from "../utils/getRandomInt";
import { PersonButton } from "../components/PersonButton";

const { quotes } = quotesInfo;
const timer = new Timer(5000);

const getSettings = (params: ReadonlyURLSearchParams) => ({
    bg: {
        color: params.get("bg.color") ?? "bg-rose-200",
    },
    text: params.get("text") ?? "Here's a little message for you. Click the person to see it!",
    p1: {
        display: params.get("p1.display") ?? "👨🏽",
    },
    p2: {
        display: params.get("p2.display") ?? "👩🏽",
    },
    connector: {
        display: params.get("connector.display") ?? "❤️‍🔥",
    }
})

export default function HomePage() {
    const [messageIndex, setMessageIndex] = useState<number>(0);
    const [showBubble, setShowBubble] = useState<1 | 2 | null>(null);
    const params = useSearchParams();

    const bubbleOrientation = showBubble === 1 ? "left" : "right";
    const settings = getSettings(params);

    const handleClick = (index: 1 | 2) => {
        timer.reset();

        setMessageIndex(getRandomInt());
        setShowBubble(index);

        timer.start(() => {
            setShowBubble(null);
        });
    }

    return (
        <DefaultLayout bgColor={settings.bg.color} title={"I love you."}>
            <div className="w-screen min-h-screen relative flex items-center">
                <div className="relative w-full">
                    <MessageBubble
                        key={quotes[messageIndex]}
                        isActive={!!showBubble}
                        orientation={bubbleOrientation}
                        timeout={timer.delay}
                    >
                        {quotes[messageIndex]}
                    </MessageBubble>
                    <div className="relative flex gap-1 items-center justify-center">
                        <PersonButton className="z-10" onClick={() => handleClick(1)}>
                            <PersonContainer>
                                {settings.p1.display}
                            </PersonContainer>
                        </PersonButton>
                        <PersonContainer className="z-0" size="text-3xl">
                            <span className={[
                                "h-15 aspect-square rounded-full absolute",
                                "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                                "bg-radial from-pink-400/70 via-transparent",
                                "animate-ping"
                            ].join(" ")}></span>
                            <span className="relative">{settings.connector.display}</span>
                        </PersonContainer>
                        <PersonButton className="z-10" onClick={() => handleClick(2)}>
                            <PersonContainer>
                                {settings.p2.display}
                            </PersonContainer>
                        </PersonButton>
                    </div>
                    {/* TODO: embed option */}
                    <div className="p-2 mb-8 text-center">{settings.text}</div>
                    <div className="opacity-75 flex-col place-content-center place-items-center">
                        <hr className="w-5 border-slate-900 opacity-40" />
                        <hr className="h-14 border-l border-dotted border-slate-900 opacity-40" />
                        <div className={[
                            "relative",
                            "text-xs italic opacity-70 duration-150 hover:opacity-100",
                            "inline-flex items-center justify-center"
                        ].join(" ")}>
                            <span className="absolute left-0 -translate-x-full pr-1 text-nowrap">{"Made with"}</span>
                            <span className="not-italic">{" ❤️ "}</span>
                            <span className="absolute right-0 translate-x-full pl-1 text-nowrap">
                                {"by "}
                                <a href={"https://crealgo.com"} className="hover:underline not-italic">
                                    {"Crealgo"}
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
