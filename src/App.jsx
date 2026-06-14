import React, { useState } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
	useNavigate,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";
import DonationModal from "./components/DonationModal";
import Home from "./pages/Home";
import Philosophy from "./pages/Philosophy";
import Adopt from "./pages/Adopt";
import Stories from "./pages/Stories";
import Donate from "./pages/Donate";

function AppContent() {
	const location = useLocation();
	const navigate = useNavigate();
	const [authModal, setAuthModal] = useState({ isOpen: false, mode: "signin" });
	const [donationModal, setDonationModal] = useState(false);

	// Check if we should show auth modal based on URL
	React.useEffect(() => {
		if (location.pathname === "/signin") {
			setAuthModal({ isOpen: true, mode: "signin" });
		} else if (location.pathname === "/signup") {
			setAuthModal({ isOpen: true, mode: "signup" });
		} else {
			setAuthModal({ isOpen: false, mode: "signin" });
		}
	}, [location.pathname]);

	React.useEffect(() => {
		if (location.hash) {
			window.setTimeout(() => document.querySelector(location.hash)?.scrollIntoView({ behavior: "smooth" }), 0);
		} else {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	}, [location.pathname, location.hash]);

	const closeAuthModal = () => {
		setAuthModal({ isOpen: false, mode: "signin" });
		// Navigate back to home when modal is closed
		navigate("/");
	};

	const switchAuthMode = (newMode) => {
		setAuthModal((prev) => ({ ...prev, mode: newMode }));
		// Update URL to match the new mode
		navigate(`/${newMode}`);
	};

	const openDonationModal = () => {
		setDonationModal(true);
	};

	const closeDonationModal = () => {
		setDonationModal(false);
	};

	return (
		<>
			<div className="site-shell">
			<Header onDonateClick={openDonationModal} />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/philosophy" element={<Philosophy />} />
					<Route path="/story" element={<Philosophy />} />
					<Route path="/adopt" element={<Adopt />} />
					<Route path="/stories" element={<Stories />} />
					<Route path="/donate" element={<Donate />} />
					<Route path="/signin" element={<Home />} />
					<Route path="/signup" element={<Home />} />
				</Routes>
			</main>
			<Footer />
			<AuthModal
				isOpen={authModal.isOpen}
				onClose={closeAuthModal}
				mode={authModal.mode}
				onSwitchMode={switchAuthMode}
			/>
			<DonationModal isOpen={donationModal} onClose={closeDonationModal} />
			</div>
		</>
	);
}

function App() {
	return (
		<Router>
			<div className="App">
				<AppContent />
			</div>
		</Router>
	);
}

export default App;
