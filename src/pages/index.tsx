import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";
import MessageBubble from "../components/MessageBubble";
import { PersonButton } from "../components/PersonButton";
import { PersonContainer } from "../components/PersonContainer";
import quotesInfo from "../data/quotes.json";
import DefaultLayout from "../layouts/DefaultLayout";
import { Timer } from "../utils/Timer";
import { getRandomInt } from "../utils/getRandomInt";

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
        display: params.get("connector.display") ?? "❤️",
    }
})

export default function HomePage() {
    const [messageIndex, setMessageIndex] = useState<number>(0);
    const [showBubble, setShowBubble] = useState<1 | 2 | null>(null);
    const [isEditting, setIsEditting] = useState<boolean>(false);

    const params = useSearchParams();
    const router = useRouter();

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
                    <div className="relative flex p-1 items-center justify-center">
                        <PersonButton
                            isEditting={isEditting}
                            className="z-10"
                            onInputChange={(event) => {
                                router.push({
                                    query: {
                                        ...router.query,
                                        "p1.display": event.target.value,
                                    }
                                })
                            }}
                            onButtonClick={() => handleClick(1)}
                            value={settings.p1.display}
                        />
                        <PersonContainer className="z-0" size="text-3xl">
                            <span className={[
                                "h-15 aspect-square rounded-full absolute",
                                "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                                "bg-radial from-pink-400/70 via-transparent",
                                isEditting ? "invisible" : "animate-ping"
                            ].join(" ")} />
                            <span className={[
                                "relative duration-300",
                                isEditting ? "opacity-20" : "opacity-100",
                            ].join(" ")}>
                                {settings.connector.display}
                            </span>
                        </PersonContainer>
                        <PersonButton
                            isEditting={isEditting}
                            className="z-10"
                            onInputChange={(event) => {
                                router.push({
                                    query: {
                                        ...router.query,
                                        "p2.display": event.target.value,
                                    }
                                })
                            }}
                            onButtonClick={() => handleClick(2)}
                            value={settings.p2.display}
                        />
                    </div>
                    {/* TODO: embed option */}
                    <div className="mb-2 flex items-center justify-center mx-auto max-w-xl">
                        <textarea
                            disabled={!isEditting}
                            onChange={(event) => {
                                router.push({
                                    query: {
                                        ...router.query,
                                        text: event.target.value,
                                    }
                                });
                            }}
                            contentEditable={isEditting}
                            className={[
                                "p-2 rounded-sm border resize-none",
                                "w-full text-center mx-auto",
                                isEditting
                                    ? "bg-white border-slate-400"
                                    : "bg-transparent border-transparent",
                            ].join(" ")}
                            defaultValue={settings.text}
                        />
                    </div>
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
            {params.get("embed") !== "true" && (
                <div className={[
                    "absolute top-2 right-2",
                    "flex gap-1"
                ].join(" ")}>
                    <button
                        className={[
                            "font-sans cursor-pointer text-sm",
                            "px-2 py-1 rounded-sm",
                            "bg-slate-800/10 hover:bg-slate-800/20",
                        ].join(" ")}
                        onClick={() => setIsEditting(!isEditting)}
                    >
                        {isEditting ? 'Finish ✅' : 'Edit ✍🏽'}
                    </button>
                    <button
                        className={[
                            "font-sans cursor-pointer text-sm",
                            "px-2 py-1 rounded-sm",
                            "bg-slate-800/10 hover:bg-slate-800/20",
                            "disabled:opacity-50 disabled:cursor-not-allowed",
                        ].join(" ")}
                        onClick={async (event) => {
                            const target = event.currentTarget;

                            target.innerText = 'Copied! ✅';
                            target.disabled = true;

                            setTimeout(() => {
                                target.innerText = 'Share 🔗'
                                target.disabled = false;
                            }, 2000);

                            await navigator.clipboard.writeText(location.href);
                        }}
                    >
                        {'Share 🔗'}
                    </button>
                </div>
            )}
        </DefaultLayout>
    );
}
