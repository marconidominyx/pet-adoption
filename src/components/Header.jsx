import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
	["/philosophy", "Philosophy"],
	["/adopt", "Available souls"],
	["/stories", "The afterglow"],
];

const Header = () => {
	const location = useLocation();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="site-header">
			<div className="wrap header-inner">
				<Link to="/" className="brand" onClick={() => setIsMenuOpen(false)}>
					<span className="brand-mark material-symbols-outlined">pets</span>
					<span>Oasis Pets<small>For every soul, a sanctuary</small></span>
				</Link>

				<nav className="main-nav" aria-label="Main navigation">
					{links.map(([path, label]) => (
						<Link key={path} to={path} className={`nav-link ${location.pathname === path ? "active" : ""}`}>
							{label}
						</Link>
					))}
				</nav>

				<div className="header-actions">
					<Link to="/donate" className="header-give">Ways to give</Link>
					<button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
						<span className="material-symbols-outlined">{isMenuOpen ? "close" : "menu"}</span>
					</button>
				</div>
			</div>

			{isMenuOpen && (
				<nav className="mobile-menu" aria-label="Mobile navigation">
					{links.map(([path, label]) => (
						<Link key={path} to={path} className={`nav-link ${location.pathname === path ? "active" : ""}`} onClick={() => setIsMenuOpen(false)}>
							{label}
						</Link>
					))}
					<Link to="/donate" className="nav-link" onClick={() => setIsMenuOpen(false)}>Ways to give</Link>
				</nav>
			)}
		</header>
	);
};

export default Header;
