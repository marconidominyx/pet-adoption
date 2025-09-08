import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = ({ onDonateClick }) => {
	const location = useLocation();
	const [isProfileOpen, setIsProfileOpen] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false); // This would come from auth context
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleProfile = () => {
		setIsProfileOpen(!isProfileOpen);
	};

	const handleSignOut = () => {
		setIsLoggedIn(false);
		setIsProfileOpen(false);
		// Handle sign out logic here
	};

	return (
		<header className="header">
			<div
				className={`menu-overlay ${isMenuOpen ? "active" : ""}`}
				onClick={() => setIsMenuOpen(false)}
				aria-hidden="true"
			/>
			<div className="container">
				<div className="header-content">
					<Link to="/" className="logo">
						<img
							src="/images/logo.png"
							alt="Oasis Shelter Logo"
							className="logo-icon"
						/>
						<span>
							<span className="logo-text">Oasis Shelter</span>
							<br />
							<small style={{ color: "#7a7a7a", fontWeight: 400 }}>
								Rescue • Care • Home
							</small>
						</span>
					</Link>

					<button
						className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label="Toggle menu"
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
					<nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
						<div className="nav-links">
							<Link
								to="/"
								className={`nav-link ${
									location.pathname === "/" ? "active" : ""
								}`}
								onClick={() => setIsMenuOpen(false)}
							>
								Home
							</Link>
							<Link
								to="/story"
								className={`nav-link ${
									location.pathname === "/story" ? "active" : ""
								}`}
								onClick={() => setIsMenuOpen(false)}
							>
								Our Story
							</Link>
							<Link
								to="/adopt"
								className={`nav-link ${
									location.pathname === "/adopt" ? "active" : ""
								}`}
								onClick={() => setIsMenuOpen(false)}
							>
								Adopt
							</Link>
							<Link
								to="/signup"
								className="nav-link"
								onClick={() => setIsMenuOpen(false)}
							>
								Get Involved
							</Link>
						</div>
						<div className="nav-actions">
							<button
								className="mobile-donate-btn"
								onClick={() => {
									onDonateClick();
									setIsMenuOpen(false);
								}}
							>
								<span className="donate-icon">❤️</span>
								Donate Today
							</button>
							{!isLoggedIn && (
								<Link
									to="/signup"
									className="mobile-signup-btn"
									onClick={() => setIsMenuOpen(false)}
								>
									Sign Up
								</Link>
							)}
						</div>
					</nav>
					<div className="header-actions desktop-actions">
						<button className="donate-btn" onClick={onDonateClick}>
							<span className="donate-icon">❤️</span>
							Donate Today
						</button>

						{/* Profile Dropdown */}
						<div className="profile-container">
							{isLoggedIn ? (
								<>
									<button className="profile-btn" onClick={toggleProfile}>
										<div className="profile-avatar">
											<span className="profile-initial">U</span>
										</div>
									</button>
									{isProfileOpen && (
										<div className="profile-dropdown">
											<div className="profile-dropdown-item">
												<Link to="/profile" className="profile-link">
													<span className="profile-link-icon">👤</span>
													Profile
												</Link>
											</div>
											<div className="profile-dropdown-item">
												<button
													className="profile-link signout"
													onClick={handleSignOut}
												>
													<span className="profile-link-icon">🚪</span>
													Sign Out
												</button>
											</div>
										</div>
									)}
								</>
							) : (
								<Link to="/signin" className="signin-btn">
									Sign In
								</Link>
							)}
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
