import React, { useState } from "react";
import "./DonationModal.css";

const DonationModal = ({ isOpen, onClose }) => {
	const [activeTab, setActiveTab] = useState("gcash");
	const [copiedItem, setCopiedItem] = useState(null);

	const paymentMethods = {
		gcash: {
			name: "GCash",
			icon: "💳",
			details: [
				{ label: "Account Name", value: "Marconi Dominyx Asis" },
				{ label: "Account Number", value: "09770433448" },
			],
		},
		binance: {
			name: "Binance",
			icon: "🏦",
			details: [
				{ label: "Name", value: "Dominyx" },
				{ label: "Account Number", value: "250425055" },
			],
		},
		crypto: {
			name: "Cryptocurrency",
			icon: "₿",
			details: [
				{
					label: "BSC (BEP20)",
					value: "0x927e3f1ad89d68c13a50c4e54dc4d5a9eeb8b8f6",
					network: "BSC (BEP20)",
				},
				{
					label: "TRX (TRC20)",
					value: "TSkPDn3ii6wrFnKZ4hKBjkoaZfyeU8YkQd",
					network: "TRX (TRC20)",
				},
				{
					label: "ETH (ERC20)",
					value: "0x927e3f1ad89d68c13a50c4e54dc4d5a9eeb8b8f6",
					network: "ETH (ERC20)",
				},
				{
					label: "Matic (PoS)",
					value: "0x927e3f1ad89d68c13a50c4e54dc4d5a9eeb8b8f6",
					network: "Matic (PoS)",
				},
				{
					label: "Solana (SOL)",
					value: "6wHvkK7vHp2K4imMEmk3UHf6y8ZXEDQg6pGeoQBdJLBJ",
					network: "Solana (SOL)",
				},
			],
		},
	};

	const copyToClipboard = async (text, label) => {
		try {
			await navigator.clipboard.writeText(text);
			setCopiedItem(label);
			setTimeout(() => setCopiedItem(null), 2000);
		} catch (err) {
			console.error("Failed to copy: ", err);
		}
	};

	const handleBackdropClick = (e) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	if (!isOpen) return null;

	return (
		<div className="donation-modal-overlay" onClick={handleBackdropClick}>
			<div className="donation-modal">
				<button className="donation-modal-close" onClick={onClose}>
					×
				</button>

				<div className="donation-modal-content">
					<div className="donation-modal-header">
						<div className="donation-modal-logo">
							<div className="donation-modal-logo-icon">🐾</div>
							<span className="donation-modal-logo-text">Oasis Pets</span>
						</div>
						<h2 className="donation-modal-title">Support Our Mission</h2>
						<p className="donation-modal-subtitle">
							Your donation helps us rescue, care for, and find loving homes for
							abandoned pets. Every contribution makes a difference in their
							lives.
						</p>
					</div>

					<div className="donation-tabs">
						{Object.entries(paymentMethods).map(([key, method]) => (
							<button
								key={key}
								className={`donation-tab ${activeTab === key ? "active" : ""}`}
								onClick={() => setActiveTab(key)}
							>
								<span className="donation-tab-icon">{method.icon}</span>
								<span className="donation-tab-text">{method.name}</span>
							</button>
						))}
					</div>

					<div className="donation-content">
						<div className="donation-method-info">
							<div className="donation-method-header">
								<span className="donation-method-icon">
									{paymentMethods[activeTab].icon}
								</span>
								<h3 className="donation-method-title">
									{paymentMethods[activeTab].name}
								</h3>
							</div>

							<div className="donation-details">
								{paymentMethods[activeTab].details.map((detail, index) => (
									<div key={index} className="donation-detail-item">
										<div className="donation-detail-header">
											<span className="donation-detail-label">
												{detail.network || detail.label}
											</span>
											<button
												className="donation-copy-btn"
												onClick={() =>
													copyToClipboard(
														detail.value,
														`${detail.label}-${index}`
													)
												}
												title="Copy to clipboard"
											>
												{copiedItem === `${detail.label}-${index}` ? "✓" : "📋"}
											</button>
										</div>
										<div className="donation-detail-value">{detail.value}</div>
									</div>
								))}
							</div>
						</div>

						<div className="donation-instructions">
							<h4 className="donation-instructions-title">How to Donate:</h4>
							<ul className="donation-instructions-list">
								{activeTab === "gcash" && (
									<>
										<li>Open your GCash app</li>
										<li>Go to "Send Money"</li>
										<li>Enter the account number above</li>
										<li>Verify the account name matches</li>
										<li>Enter your donation amount</li>
										<li>Complete the transaction</li>
									</>
								)}
								{activeTab === "binance" && (
									<>
										<li>Open your Binance app</li>
										<li>Go to "P2P Trading" or "Send"</li>
										<li>Search for the account number above</li>
										<li>Verify the account name matches</li>
										<li>Enter your donation amount</li>
										<li>Complete the transaction</li>
									</>
								)}
								{activeTab === "crypto" && (
									<>
										<li>Open your crypto wallet</li>
										<li>Select the appropriate network</li>
										<li>Copy the wallet address above</li>
										<li>Send your donation to the address</li>
										<li>Ensure you're using the correct network</li>
										<li>Double-check the address before sending</li>
									</>
								)}
							</ul>
						</div>
					</div>

					<div className="donation-footer">
						<p className="donation-thank-you">
							Thank you for your generosity! Your support helps us continue our
							mission of rescuing and caring for abandoned pets. 🐕🐱
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DonationModal;
