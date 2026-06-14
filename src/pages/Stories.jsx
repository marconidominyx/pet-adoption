import { Link } from "react-router-dom";

const stories = [
	{ image: "/images/Bacolod-3.png", label: "A new routine", quote: "He arrived afraid of doorways. Now he is the first one waiting by the door for our morning walk.", person: "Theo & the Ramos family" },
	{ image: "/images/536568e9850470ab5e04aa780cb2c55c 1.png", label: "A perfect match", quote: "We thought we were ready for a calm dog. She had other ideas, and somehow she was exactly right.", person: "Pepper & Ana" },
	{ image: "/images/Bacolod-4.png", label: "Worth the wait", quote: "The first week, she watched us from across the room. The first month, she fell asleep on my feet.", person: "Luna & Marco" },
	{ image: "/images/Bacolod-2.png", label: "A full house", quote: "One adoption became two. Now the quiet corners are full of paws, and the house finally feels like ours.", person: "Mika, Bruno & the Santos family", panorama: true },
];

const Stories = () => (
	<div className="page stories-page">
		<section className="page-hero">
			<div className="wrap page-hero-grid">
				<div><span className="eyebrow">Success stories</span><h1 className="display">The afterglow.</h1></div>
				<div className="page-hero-copy"><p>Where difficult chapters end and beautiful new narratives begin. These are the lives that found one another.</p></div>
			</div>
		</section>
		<section className="section">
			<div className="wrap stories-list">
				{stories.map((story) => (
					<article className={`success-story ${story.panorama ? "success-story--panorama" : ""}`} key={story.person}>
						<div className="success-image"><img src={story.image} alt={story.person} /></div>
						<div className="success-copy"><span className="eyebrow">{story.label}</span><blockquote>“{story.quote}”</blockquote><cite>{story.person}</cite></div>
					</article>
				))}
			</div>
		</section>
		<section className="story-panel" style={{textAlign:"center", alignItems:"center"}}>
			<span className="eyebrow">Your turn</span><h2 className="display">Start a good story.</h2><p>Someone is waiting to meet their favorite person.</p><Link to="/adopt" className="button button--light">Meet the pets</Link>
		</section>
	</div>
);

export default Stories;
