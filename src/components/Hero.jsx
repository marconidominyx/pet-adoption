import React from "react";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";

const Hero = () => {
	const navigate = useNavigate();
	return (
		<section className="hero">
			<div className="hero-background">
				<div className="hero-overlay"></div>
			</div>
			<div className="container">
				<div className="hero-content">
					<div className="hero-badge">
						<span className="badge-text">🐾 Making a Difference</span>
					</div>
					<h1 className="hero-title">
						You can't buy love, but you can{" "}
						<span className="hero-highlight">rescue it</span>.
					</h1>
					<p className="hero-subtitle">
						Adopt and give a rescued animal a chance at a beautiful life filled
						with love, care, and endless joy.
					</p>
					<div className="hero-actions">
						<button
							aria-label="Adopt a pet"
							className="cta-button primary"
							onClick={() => navigate("/adopt")}
						>
							<span className="btn-icon">🏠</span>
							Bring Home Love
						</button>
						<button
							aria-label="Learn more"
							className="cta-button secondary"
							onClick={() => navigate("/story")}
						>
							<span className="btn-icon">❤️</span>
							Learn more of us
						</button>
					</div>
					<div className="hero-stats">
						<div className="stat-item">
							<div className="stat-number">
								<CountUp end={500} duration={2.5} suffix="+" />
							</div>
							<div className="stat-label">Pets Rescued</div>
						</div>
						<div className="stat-item">
							<div className="stat-number">
								<CountUp end={300} duration={2.5} suffix="+" />
							</div>
							<div className="stat-label">Happy Adoptions</div>
						</div>
						<div className="stat-item">
							<div className="stat-number">
								<CountUp end={50} duration={2.5} suffix="+" />
							</div>
							<div className="stat-label">Volunteers</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
