import SpotifyEmbed from "../components/SpotifyEmbed";
import SpotifyList from "../components/SpotifyList";
import DefaultLayout from "../layouts/DefaultLayout";

export default function HomePage() {
	return (
		<DefaultLayout title="A Little Letter for You" padded>
			<div className="max-w-2xl mx-auto">
				<h1 className="text-2xl">Goodbye, for now ~</h1>
				<hr className="border-neutral-900 opacity-20" />
				<small>March 15, 2022</small>
				<p className="mt-5">Hello hello, mi amorcito lindo,</p>
				<p className="mt-5">
					Cómo te va? Realmente. I want you to hear a song that
					reminded me of you:
				</p>
				<SpotifyEmbed
					className="mt-3"
					src="https://open.spotify.com/embed/track/5jgFfDIR6FR0gvlA56Nakr?utm_source=generator"
				/>
				<small className="block mb-3 italic mt-1">
					You&apos;ll need to login into Spotify to hear the whole
					song.
				</small>
				<p className="mt-5">
					I know what you’re thinking, “what does this song mean?”.
					And hey, te conozco - so here is a disclaimer: don&apos;t
					take the lyrics <em>too</em> seriously. I wanted you to hear
					it because a few words reminded me of how you described your
					career change. Btw, I also know that you just smiled that
					beautiful non-diplomatic smile.
				</p>
				<p className="mt-5">
					Remember that quote, “Lo que va a pasar, pasará”. Such a
					“real” quote right? But I don’t think it completely applies
					to us. I don’t want to just “let things go”. I want to grow.
					I want to live. I want to experience. And finding someone to
					share that with is tough. Maybe that’s why I’m usually
					alone, but I found that passion in you. You and I are
					restless people. And like me, most of your life is spent
					trying to slow down to enjoy the scenery and then running
					again because you feel bad for taking a break.
				</p>
				<p className="mt-5">
					In my opinion, that’s what makes life interesting. The
					chaos, the beautiful mess we create when we overcome things.
					The cracked lines we see when we put broken pieces back
					together. These are all memories, the good and the bad. I
					want you to live that chaos. Feel the feelings. Do what you
					love, do what you enjoy, paint, cry, dance, laugh, use
					setting #4, learn to code, anything and everything!
				</p>
				<p className="mt-5">
					And that’s where this song comes in. It’s about a caged
					bird. Your cage was your old job and now you’re free, free
					to dream again about your career, your business, your
					free-time. So, “take these broken wings and learn to fly”.
					Fly for me. Fly for yourself. Show yourself what a
					Santandereana can do, because yo ya sé. 🕊  It’s okay to fly
					too close to the sun. (Quieres soool, de todos modos 😉).
					Dream big, reach for the stars so when you fall, you fall on
					the clouds.
				</p>
				<p className="mt-5">
					I was thinking about what I wanted to leave you with, and
					here’s what I got: a few songs, a few words and a beautiful
					little mess of memories that we’ve shared.
				</p>
				<p className="mt-5">
					So, goodbye for now. And until we meet again, my soñadora.
					Cheers with our glasses full of delicious refajo. 🍻
				</p>
				<p className="mt-5">Te amo mucho, a la luna y vuelta. Ciao.</p>
				<p>Tu morenito 💃🏻🕺🏽</p>

				<div id="songs" className="mt-6">
					<a href="#songs" className="text-xl block" id="songs">
						A little bit of cheese for you ~
					</a>
					<hr className="border-neutral-900 opacity-20 mb-1" />
					<small className="block mb-3 italic">
						You&apos;ll need to login into Spotify to hear the whole
						song. Also, look up the translated lyrics of these
						songs. The hindi songs are beautiful.
					</small>

					<SpotifyList
						songs={[
							"https://open.spotify.com/embed/track/3FTRSa9mWB3kKx2jkhUAN3?utm_source=generator",
							"https://open.spotify.com/embed/track/1pGRzBxuybmDJqKJ6MI65D?utm_source=generator",
							"https://open.spotify.com/embed/track/6q7bXTv3yBedHblKRoC5uu?utm_source=generator",
							"https://open.spotify.com/embed/track/1gWtHDe403RuyZqhvSRcv8?utm_source=generator",
							"https://open.spotify.com/embed/track/164OhifL9Eld1xMaptReyR?utm_source=generator",
							"https://open.spotify.com/embed/track/3yrSvpt2l1xhsV9Em88Pul?utm_source=generator",
							"https://open.spotify.com/embed/track/6EF2wGmHfnKSVjR3t6Ufwd?utm_source=generator",
							"https://open.spotify.com/embed/track/3fk5fBFB27GbWGATdBpOgr?utm_source=generator",
							"https://open.spotify.com/embed/track/3ARHcfADevNLh3m5oz2TVG?utm_source=generator",
							"https://open.spotify.com/embed/track/4qQUIX0d8HcJW4TsHTrBaf?utm_source=generator",
							"https://open.spotify.com/embed/track/5JGBQUEp1XhEUrclOaiWa9?utm_source=generator",
							"https://open.spotify.com/embed/track/4oUsaxFNEZUidANbrhbWaM?utm_source=generator",
						]}
					/>
				</div>
			</div>
		</DefaultLayout>
	);
}
