import { Link } from "react-router-dom";

const Footer = () => (
	<footer className="site-footer">
		<div className="wrap">
			<div className="footer-top">
				<div className="footer-brand">
					<h2 className="display">Stay kind.</h2>
					<p>Rescue is a team sport. Follow the field notes, meet a new friend, or help us keep every bowl full.</p>
					<div className="footer-location"><span className="material-symbols-outlined">location_on</span><span>Butuan City, Philippines<small>Our rescue community</small></span></div>
				</div>
				<div className="footer-col">
					<h3>Help</h3>
					<Link to="/adopt">Meet the pets</Link>
					<Link to="/donate">Ways to give</Link>
					<Link to="/signup">Volunteer</Link>
					<Link to="/signup">Foster</Link>
					<Link to="/donate">Sponsor</Link>
				</div>
				<div className="footer-col">
					<h3>Quick links</h3>
					<Link to="/philosophy">Our approach</Link>
					<Link to="/philosophy#process">Adoption process</Link>
					<Link to="/stories">Happy endings</Link>
				</div>
				<div className="footer-col">
					<h3>Good news, occasionally</h3>
					<p style={{color:"rgba(255,255,255,.58)", lineHeight:1.5}}>New arrivals, adoption updates, and small victories.</p>
					<form className="newsletter" onSubmit={(event) => event.preventDefault()}>
						<input type="email" aria-label="Email address" placeholder="you@email.com" />
						<button aria-label="Join newsletter"><span className="material-symbols-outlined">arrow_forward</span></button>
					</form>
				</div>
			</div>
			<div className="footer-bottom">
				<span>© 2026 Oasis Pets</span>
				<span>Built for second chances in Butuan City</span>
			</div>
		</div>
	</footer>
);

export default Footer;
