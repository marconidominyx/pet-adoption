import CountUp from "react-countup";
import { Link } from "react-router-dom";

const featuredPets = [
	{ name: "Sunny", note: "Professional optimist", image: "/images/cap_dog.png" },
	{ name: "Milo", note: "Quietly hilarious", image: "/images/image 1.png" },
	{ name: "The Porch Crew", note: "Ready when you are", image: "/images/Bacolod-2.png" },
];

const waysToHelp = [
	{ icon: "home", title: "Adopt", copy: "Make the biggest kind of room.", to: "/adopt", tone: "yellow" },
	{ icon: "volunteer_activism", title: "Volunteer", copy: "Lend your hands, wheels, or time.", to: "/signup", tone: "coral" },
	{ icon: "bedroom_baby", title: "Foster", copy: "Be the soft place between chapters.", to: "/signup", tone: "sage" },
	{ icon: "favorite", title: "Sponsor", copy: "Cover a meal, medicine, or rescue ride.", to: "/donate", tone: "blue" },
];

const Home = () => (
	<div className="page">
		<section className="home-hero">
			<div className="wrap hero-grid">
				<div className="hero-copy">
					<span className="eyebrow">Fresh starts since 2025</span>
					<h1 className="display">Make room for <em>love.</em></h1>
					<div className="hero-intro">
						<strong>Hi!</strong>
						<p>We rescue bright-eyed, big-hearted pets around Butuan City and introduce them to the humans they were meant to find.</p>
					</div>
					<div className="hero-buttons">
						<Link to="/adopt" className="button">Meet your new best friend <span className="material-symbols-outlined">arrow_forward</span></Link>
						<Link to="/philosophy" className="button button--light">How we do it</Link>
					</div>
				</div>
				<div className="hero-visual">
					<div className="hero-photo"><img src="/images/cap_dog.png" alt="Happy golden retriever wearing a blue cap" /></div>
					<div className="hero-sticker">100% good<br/>boys & girls</div>
					<div className="hero-note">Currently accepting belly rubs</div>
				</div>
			</div>
		</section>

		<div className="ticker" aria-hidden="true">
			<div className="ticker-track">
				{[...Array(2)].flatMap((_, group) => ["Rescue", "Rehabilitate", "Rehome", "Repeat"].map((item) => <span className="ticker-item" key={`${group}-${item}`}>{item}</span>))}
			</div>
		</div>

		<section className="section">
			<div className="wrap mission-grid">
				<div>
					<span className="eyebrow">Our small, mighty mission</span>
					<h2 className="display">No pet left waiting.</h2>
				</div>
				<div className="mission-copy">
					<p className="lead">Oasis Pets began with a simple belief: abandoned is not the end of the story. We create a soft place to land, then work carefully to make the next home the forever one.</p>
					<Link to="/philosophy" className="text-link">Read our field notes <span className="material-symbols-outlined">arrow_forward</span></Link>
					<div className="impact-row">
						<div className="impact"><strong><CountUp end={500} suffix="+" /></strong><span>Rescued</span></div>
						<div className="impact"><strong><CountUp end={300} suffix="+" /></strong><span>Rehomed</span></div>
						<div className="impact"><strong><CountUp end={50} suffix="+" /></strong><span>Volunteers</span></div>
					</div>
				</div>
			</div>
		</section>

		<section className="featured section">
			<div className="wrap">
				<div className="section-head">
					<div><span className="eyebrow">Ready to meet you</span><h2 className="display">The good ones.</h2></div>
					<p>Every one of them is weird, wonderful, and fully deserving of their own spot on the sofa.</p>
				</div>
				<div className="pet-strip">
					{featuredPets.map((pet, index) => (
						<Link to="/adopt" className="mini-pet" key={pet.name}>
							<div className="mini-photo"><img src={pet.image} alt={pet.name} /><span className="mini-index">0{index + 1}</span></div>
							<h3>{pet.name}</h3><p>{pet.note}</p>
						</Link>
					))}
				</div>
			</div>
		</section>

		<section className="home-story">
			<div className="story-photo"><img src="/images/Bacolod-5.png" alt="Volunteers spending time with rescued dogs" /></div>
			<div className="story-panel">
				<span className="eyebrow">The humans behind the bowls</span>
				<h2 className="display">Big care. Small team.</h2>
				<p>We are foster parents, drivers, snack buyers, medicine givers, and professional name inventors. Mostly, we are people who decided to help.</p>
				<Link to="/donate" className="button button--light">Join the good work</Link>
			</div>
		</section>

		<section className="section help-section">
			<div className="wrap">
				<div className="section-head help-head">
					<div><span className="eyebrow">Get involved with us</span><h2 className="display">Pick your kind of kind.</h2></div>
					<p>There is more than one way to change a life. Start with the one that fits yours.</p>
				</div>
				<div className="help-grid">
					{waysToHelp.map((way, index) => (
						<Link to={way.to} className={`help-card help-card--${way.tone}`} key={way.title}>
							<div className="help-card-top"><span>0{index + 1}</span><span className="material-symbols-outlined">{way.icon}</span></div>
							<div><h3>{way.title}</h3><p>{way.copy}</p></div>
							<span className="material-symbols-outlined help-arrow">arrow_outward</span>
						</Link>
					))}
				</div>
			</div>
		</section>
	</div>
);

export default Home;
