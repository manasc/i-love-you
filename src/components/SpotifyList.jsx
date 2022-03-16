import SpotifyEmbed from "components/SpotifyEmbed";

export default function SpotifyList({ songs }) {
	return (
		<div className="flex flex-wrap -mx-2">
			{Array.isArray(songs) &&
				songs.map((song, index) => (
					<div key={index} className="px-2 mb-4 w-full md:w-1/2">
						<SpotifyEmbed src={song} />
					</div>
				))}
		</div>
	);
}
