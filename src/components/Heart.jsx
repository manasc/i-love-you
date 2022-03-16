import Ping from "components/Ping";
import Image from "next/image";

export default function Heart({ _, index, imageLoader }) {
	return (
		<div className="px-2 h-10 w-10 relative flex items-center justify-center z-0">
			{[1, 2].map((_, index) => (
				<Ping key={`ping-${index}`} index={index} />
			))}
			<div className="relative transform flex items-center translate-y-px">
				<Image
					loader={imageLoader}
					unoptimized
					alt="heart"
					src="/images/heart.png"
					width={20}
					height={20}
				/>
			</div>
		</div>
	);
}
