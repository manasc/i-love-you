import MessageBubble from "../components/MessageBubble";
import DefaultLayout from "../layouts/DefaultLayout";
import Image from "next/image";
import {Chance} from "chance";
import { useState } from "react";
import imageLoader from "../utils/imageLoader";
import quotesInfo from "../data/quotes.json";

const halfMark = quotesInfo.quotes.length / 2;
const daniMessages = quotesInfo.quotes.slice(0, halfMark);
const manasMessages = quotesInfo.quotes.slice(halfMark);

const PersonContainer: React.FC<React.ComponentPropsWithRef<'span'> & {
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

const chance = new Chance();

const getRandomInt = (person: "dani" | "manas") => {
    const max = person === "dani" ? daniMessages.length : manasMessages.length;
    return chance.integer({ min: 0, max: max - 1 });
};

export default function HomePage() {
    const [manasIndex, setManasIndex] = useState<number>(0);
    const [daniIndex, setDaniIndex] = useState<number>(0);

    const changeManasMessage = () => {
        setManasIndex(getRandomInt("manas"));
    };

    const changeDaniMessage = () => {
        setDaniIndex(getRandomInt("dani"));
    };

    const [showDaniMessage, setShowDaniMessage] = useState(false);
    const [showManasMessage, setShowManasMessage] = useState(false);

    return (
        <DefaultLayout title="D&M">
            <div className="w-screen min-h-screen flex flex-col items-center justify-center">
                {showDaniMessage && (
                    <MessageBubble orientation="left">
                        {daniMessages[daniIndex]}
                    </MessageBubble>
                )}
                {showManasMessage && (
                    <MessageBubble orientation="right">
                        {manasMessages[manasIndex]}
                    </MessageBubble>
                )}
                <div className="relative mb-1 flex gap-3 items-center justify-center">
                    <button
                        className="px-5 cursor-pointer flex items-center justify-center"
                        onClick={() => {
                            changeDaniMessage();
                            setShowDaniMessage(true);
                        }}
                    >
                        <PersonContainer>
                            {'💃🏻'}
                        </PersonContainer>
                    </button>
                    <PersonContainer size="text-3xl">
                        {'❤️'}
                    </PersonContainer>
                    <button
                        className="px-5 cursor-pointer flex items-center justify-center"
                        onClick={() => {
                            changeManasMessage();
                            setShowManasMessage(true);
                        }}
                    >
                        <PersonContainer>
                            {'🕺'}
                        </PersonContainer>
                    </button>
                </div>
                {/* TODO: embed option */}
                <div className="pt-4 opacity-75 text-sm text-center">
                    <p className="mb-4">
                        {"Hazme un clic y te daré un poquito amor."}
                    </p>
                    <p>
                        <a href="/a-little-letter" className="hover:underline flex items-center text-xs justify-center">
                            A little letter to you, mi amor
                            <Image
                                loader={imageLoader}
                                unoptimized
                                alt="link to letter"
                                src="/images/arrow-right.svg"
                                width={18}
                                height={18}
                            />
                        </a>
                    </p>
                </div>
            </div>
        </DefaultLayout>
    );
}
