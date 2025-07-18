import Head from "next/head";
import React from "react";

type Props = {
    children?: React.ReactNode;
    bgColor?: string;
    padded?: boolean;
    title: string;
}

export default function DefaultLayout(props: Props) {
    return (
        <React.Fragment>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />
                <meta name="description" content={"I love you."} />
                <link rel="icon" href="favicon.ico" />
                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href="apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="favicon-16x16.png"
                />
                <link rel="manifest" href="site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="safari-pinned-tab.svg"
                    color="#5bbad5"
                />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
                <link rel="manifest" href="manifest.json" />
                <title>{props.title ?? "I love you."}</title>
            </Head>
            <main
                className={[
                    "min-h-screen min-w-screen font-serif",
                    props.bgColor ?? "bg-rose-200",
                    props.padded && "py-20 px-6"
                ].join(" ")}
            >
                {props.children}
            </main>
        </React.Fragment>
    );
}
