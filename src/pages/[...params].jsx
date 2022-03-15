import Ping from "components/Ping";
import Image from "next/image";
import imageLoader from "utils/imageLoader";
import Head from "next/head";
import { useContextProvider } from "providers/GlobalContextProvider";
import ReactTooltip from "react-tooltip";
import HomePage from "components/HomePage";

export default function Home() {
	return <HomePage />;
}
