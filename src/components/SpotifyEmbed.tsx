type Props = {
    src?: string;
    className?: string;
}

export default function SpotifyEmbed(props: Props) {
    return (
        <iframe
            className={`rounded-lg w-100 ${props.className}`}
            src={props.src}
            height="80"
            width="100%"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
    );
}
