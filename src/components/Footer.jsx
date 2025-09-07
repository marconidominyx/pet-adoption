import React from "react";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-content">
					<div className="footer-section">
						<h4 className="footer-title">Visit Us</h4>
						<a href="#shelters" className="footer-link">
							Our Shelters
						</a>
						<div className="social-links">
							<a href="#" className="social-link">
								📘
							</a>
							<a href="#" className="social-link">
								📷
							</a>
							<a href="#" className="social-link">
								📺
							</a>
							<a href="#" className="social-link">
								🐦
							</a>
						</div>
					</div>

					<div className="footer-section">
						<h4 className="footer-title">Help</h4>
						<a href="#donate" className="footer-link">
							Donate
						</a>
						<a href="#sponsor" className="footer-link">
							Sponsor
						</a>
						<a href="#adopt" className="footer-link">
							Adopt
						</a>
						<a href="#volunteer" className="footer-link">
							Volunteer
						</a>
					</div>

					<div className="footer-section">
						<h4 className="footer-title">Quick Links</h4>
						<a href="#home" className="footer-link">
							Home
						</a>
						<a href="#faq" className="footer-link">
							FAQs
						</a>
						<a href="#story" className="footer-link">
							Our Story
						</a>
						<a href="#contact" className="footer-link">
							Contact
						</a>
					</div>

					<div className="footer-section">
						<h4 className="footer-title">Newsletter</h4>
						<p className="newsletter-text">
							Stay up to date with our latest news, receive exclusive deals and
							more.
						</p>
						<div className="newsletter-form">
							<input
								type="email"
								placeholder="Email Address"
								className="newsletter-input"
							/>
							<button className="newsletter-btn">Subscribe</button>
						</div>
					</div>
				</div>

				<div className="footer-bottom">
					<p className="copyright">© 2025 Oasis Pets. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
