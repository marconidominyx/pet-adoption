import React from "react";
import { Link } from "react-router-dom";

const AboutPreview = () => {
	return (
		<section className="about-preview">
			<div className="container">
				<div className="about-preview-content">
					<div className="about-preview-text">
						<h2 className="about-preview-title">
							A Place of Healing. A Home for Hope.
						</h2>
						<p className="about-preview-description">
							Oasis Pets began as a small initiative in 2025 in Butuan City,
							born from a simple belief: every animal deserves love, care, and a
							second chance. What started as a handful of volunteers helping
							abandoned pets has grown into a movement of compassion and hope.
						</p>
						<p className="about-preview-description">
							Today, we provide a safe haven for rescued animals, offering
							medical care, rehabilitation, and most importantly, the love they
							deserve. Our mission is to build a community where every pet finds
							their forever home.
						</p>
						<div className="about-preview-actions">
							<Link to="/story" className="story-link-btn">
								Read Our Full Story
							</Link>
							<button className="get-involved-btn">Get Involved</button>
						</div>
					</div>
					<div className="about-preview-image">
						<img
							src="/images/image 1.png"
							alt="Cat reaching for human hand - symbolizing hope and connection"
							className="about-preview-img"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutPreview;
