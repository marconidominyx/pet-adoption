import { useState } from "react";

const methods = [
	{ name: "GCash", icon: "account_balance_wallet", label: "Marconi Dominyx Asis", detail: "0977 043 3448" },
	{ name: "Wise", icon: "language", label: "Marconi Dominyx Asis", detail: "@marconidominyxa" },
	{ name: "Binance", icon: "currency_exchange", label: "Khoni", detail: "250425055" },
	{ name: "OKX", icon: "token", label: "Khoni", detail: "275715799866548224" },
];

const giftImpact = [
	{ amount: "P250", title: "A full bowl", copy: "Covers nourishing meals for a rescued pet." },
	{ amount: "P750", title: "A healthy start", copy: "Helps with a checkup, vaccines, or medicine." },
	{ amount: "P1,500", title: "A rescue ride", copy: "Supports transport, emergency intake, and safe shelter." },
];

const Donate = () => {
	const [copied, setCopied] = useState("");

	const copyDetail = async (value, name) => {
		await navigator.clipboard.writeText(value);
		setCopied(name);
		window.setTimeout(() => setCopied(""), 1800);
	};

	return (
		<div className="page">
			<section className="page-hero donate-hero">
				<div className="wrap page-hero-grid">
					<div><span className="eyebrow">Ways to give</span><h1 className="display">Keep the bowls full.</h1></div>
					<div className="page-hero-copy"><p>Your contribution becomes food, medicine, safe transport, clean spaces, and a little more time to find exactly the right home.</p></div>
				</div>
			</section>

			<section className="gift-impact">
				<div className="wrap gift-impact-grid">
					{giftImpact.map((gift) => <article key={gift.amount}><strong>{gift.amount}</strong><div><h3>{gift.title}</h3><p>{gift.copy}</p></div></article>)}
				</div>
			</section>

			<section className="section">
				<div className="wrap">
					<div className="section-head help-head">
						<div><span className="eyebrow">Direct contributions</span><h2 className="display">Pick your route.</h2></div>
						<p>Every amount helps. Tap any detail to copy it, then send support through the service that works for you.</p>
					</div>
					<div className="give-grid">
						{methods.map((method) => (
							<article className="give-card" key={method.name}>
								<div className="give-card-head"><h3>{method.name}</h3><span className="material-symbols-outlined">{method.icon}</span></div>
								<div className="give-detail"><small>{method.label}</small>{method.detail}</div>
								<button className="copy-button" onClick={() => copyDetail(method.detail.replaceAll(" ", ""), method.name)}>
									<span className="material-symbols-outlined">{copied === method.name ? "check" : "content_copy"}</span>{copied === method.name ? "Copied" : "Copy details"}
								</button>
							</article>
						))}
						<article className="give-card">
							<div className="give-card-head"><h3>Crypto</h3><span className="material-symbols-outlined">currency_bitcoin</span></div>
							<div className="give-detail"><small>Wallet address</small>0x927e3f1ad89d68c13a50c4e54dc4d5a9eeb8b8f6<div className="network-list"><span>BSC</span><span>TRX</span><span>ETH</span><span>Matic</span><span>Solana</span></div></div>
							<button className="copy-button copy-button--light" onClick={() => copyDetail("0x927e3f1ad89d68c13a50c4e54dc4d5a9eeb8b8f6", "Crypto")}>
								<span className="material-symbols-outlined">{copied === "Crypto" ? "check" : "content_copy"}</span>{copied === "Crypto" ? "Copied" : "Copy wallet"}
							</button>
						</article>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Donate;
