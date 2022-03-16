export default function SpotifyEmbed({ src, className }) {
	return (
		<iframe
			className={`rounded-lg w-100 ${className}`}
			src={src}
			height="80"
			width="100%"
			frameBorder="0"
			allowFullScreen=""
			allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
		></iframe>
	);
}
