import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = ({ onDonateClick }) => {
	const location = useLocation();
	const [isProfileOpen, setIsProfileOpen] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false); // This would come from auth context

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
			<div className="container">
				<div className="header-content">
					<Link to="/" className="logo">
						<div className="logo-icon">🐾</div>
						<span>
							<span className="logo-text">Oasis Pets</span>
							<br />
							<small style={{ color: "#7a7a7a", fontWeight: 400 }}>
								Rescue • Care • Home
							</small>
						</span>
					</Link>
					<nav className="nav">
						<Link
							to="/"
							className={`nav-link ${
								location.pathname === "/" ? "active" : ""
							}`}
						>
							Home
						</Link>
						<Link
							to="/story"
							className={`nav-link ${
								location.pathname === "/story" ? "active" : ""
							}`}
						>
							Our Story
						</Link>
						<Link
							to="/adopt"
							className={`nav-link ${
								location.pathname === "/adopt" ? "active" : ""
							}`}
						>
							Adopt
						</Link>
						<Link to="/signup" className="nav-link">
							Get Involved
						</Link>
					</nav>
					<div className="header-actions">
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
