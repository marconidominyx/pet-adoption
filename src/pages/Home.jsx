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
					<span className="eyebrow">Independent rescue · Butuan City</span>
					<h1 className="display">You can&apos;t buy love. <em>Rescue it.</em></h1>
					<div className="hero-intro">
						<strong>01</strong>
						<p>A community-led sanctuary for bright-eyed, big-hearted animals waiting to begin their next chapter.</p>
					</div>
					<div className="hero-buttons">
						<Link to="/adopt" className="button">Bring home love <span className="material-symbols-outlined">arrow_forward</span></Link>
						<Link to="/philosophy" className="button button--light">Our philosophy</Link>
					</div>
				</div>
				<div className="hero-visual">
					<div className="hero-photo"><img src="/images/cap_dog.png" alt="Happy golden retriever wearing a blue cap" /></div>
					<div className="hero-secondary-photo"><img src="/images/Bacolod-5.png" alt="Volunteers at the sanctuary" /></div>
					<div className="hero-sticker">Field note<br/>No. 001</div>
					<div className="hero-note">Currently accepting belly rubs</div>
				</div>
			</div>
		</section>

		<div className="ticker" aria-hidden="true">
			<div className="ticker-track">
				{[...Array(2)].flatMap((_, group) => ["For every soul, a sanctuary", "Rescue with dignity", "Connection beyond words"].map((item) => <span className="ticker-item" key={`${group}-${item}`}>{item}</span>))}
			</div>
		</div>

		<section className="section">
			<div className="wrap mission-grid">
				<div>
					<span className="eyebrow">Our small, mighty mission</span>
					<h2 className="display">The Oasis mandate.</h2>
				</div>
				<div className="mission-copy">
					<p className="lead">Every animal that walks through our doors is a precious individual deserving dignity, empathy, and a beautifully considered second chance.</p>
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
					<div><span className="eyebrow">Available souls</span><h2 className="display">Find your kindred spirit.</h2></div>
					<p>A curated gallery of extraordinary companions, each with a story and a very particular way of loving.</p>
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
				<h2 className="display">Dignity in rescue.</h2>
				<p>Our spaces are not the end of the road. They are temporary sanctuaries where healing begins through thoughtful care, ordinary patience, and people who keep showing up.</p>
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
