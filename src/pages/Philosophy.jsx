import { Link } from "react-router-dom";

const Philosophy = () => (
	<div className="page philosophy-page">
		<section className="page-hero">
			<div className="wrap page-hero-grid">
				<div><span className="eyebrow">Our philosophy</span><h1 className="display">The Oasis mandate.</h1></div>
				<div className="page-hero-copy"><p>Animal companionship is a soulful journey built on dignity, profound trust, and a genuine match between lives.</p></div>
			</div>
		</section>

		<section className="manifesto section">
			<div className="wrap">
				<p className="manifesto-quote">We do not rescue animals so they can simply <em>survive.</em> We rescue them so they can belong.</p>
				<div className="values">
					<div className="value"><span>01</span><h3>Dignity first</h3><p>Every animal gets patience, proper care, and the room to become themselves again.</p></div>
					<div className="value"><span>02</span><h3>Match slowly</h3><p>Good adoption is not a race. We listen closely and choose homes with the whole life in mind.</p></div>
					<div className="value"><span>03</span><h3>Stay connected</h3><p>Adoption day starts a new chapter. Our door remains open for advice, support, and celebration.</p></div>
				</div>
			</div>
		</section>

		<section className="section">
			<div className="wrap">
				<div className="editorial-row">
					<div className="editorial-image"><img src="/images/Bacolod-5.png" alt="Volunteers caring for rescued dogs" /></div>
					<div className="editorial-copy"><span className="eyebrow">The work</span><h2 className="display">A soft place to land.</h2><p>Rescue begins with the basics: safety, food, medicine, clean spaces, and someone showing up again tomorrow. From there, confidence grows and personalities return.</p></div>
				</div>
				<div className="editorial-row reverse">
					<div className="editorial-image"><img src="/images/Bacolod-1.png" alt="Dogs playing near the sanctuary" /></div>
					<div className="editorial-copy"><span className="eyebrow">The promise</span><h2 className="display">Forever means prepared.</h2><p>We help adopters think through energy, routine, space, finances, and the ordinary Tuesday afternoons that make up a life together.</p><Link to="/adopt" className="button" style={{marginTop:20}}>Meet the pets</Link></div>
				</div>
			</div>
		</section>
		<section className="matching-section section" id="process">
			<div className="wrap matching-grid">
				<div className="matching-intro">
					<span className="eyebrow">Curation of kinship</span>
					<h2 className="display">We match lives, not checklists.</h2>
					<p className="lead">Compatibility is more than space and species. We consider rhythm, energy, experience, support, and the life both sides can realistically share.</p>
					<Link to="/adopt" className="button button--light">Start meeting pets</Link>
				</div>
				<div className="matching-notes">
					{[
						["Lifestyle", "Quiet apartment or busy family home? Long walks or slow mornings?"],
						["Temperament", "We observe what helps each animal feel secure, curious, and themselves."],
						["Readiness", "We prepare the humans too, with honest expectations and useful support."],
					].map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}
				</div>
			</div>
		</section>
	</div>
);

export default Philosophy;
