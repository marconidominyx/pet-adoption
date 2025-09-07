import React, { useState } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";
import DonationModal from "./components/DonationModal";
import Home from "./pages/Home";
import Story from "./pages/Story";

function AppContent() {
	const location = useLocation();
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

	const closeAuthModal = () => {
		setAuthModal({ isOpen: false, mode: "signin" });
		// Navigate back to home when modal is closed
		window.history.pushState({}, "", "/");
	};

	const switchAuthMode = (newMode) => {
		setAuthModal((prev) => ({ ...prev, mode: newMode }));
		// Update URL to match the new mode
		window.history.pushState({}, "", `/${newMode}`);
	};

	const openDonationModal = () => {
		setDonationModal(true);
	};

	const closeDonationModal = () => {
		setDonationModal(false);
	};

	return (
		<>
			<Header onDonateClick={openDonationModal} />
			<main className="main-content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/story" element={<Story />} />
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
