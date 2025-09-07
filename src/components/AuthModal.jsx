import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AuthModal.css";

const AuthModal = ({ isOpen, onClose, mode = "signin", onSwitchMode }) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission here
		console.log("Form submitted:", formData);
		// Close modal after successful submission
		onClose();
	};

	const handleBackdropClick = (e) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	if (!isOpen) return null;

	return (
		<div className="auth-modal-overlay" onClick={handleBackdropClick}>
			<div className="auth-modal">
				<button className="auth-modal-close" onClick={onClose}>
					×
				</button>

				<div className="auth-modal-content">
					<div className="auth-modal-header">
						<div className="auth-modal-logo">
							<div className="auth-modal-logo-icon">🐾</div>
							<span className="auth-modal-logo-text">Oasis Pets</span>
						</div>
						<h2 className="auth-modal-title">
							{mode === "signin" ? "Welcome Back" : "Join Oasis Pets"}
						</h2>
						<p className="auth-modal-subtitle">
							{mode === "signin"
								? "Sign in to continue your journey with us"
								: "Create your account and start making a difference"}
						</p>
					</div>

					<form className="auth-modal-form" onSubmit={handleSubmit}>
						{mode === "signup" && (
							<div className="auth-form-group">
								<label htmlFor="name">Full Name</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									placeholder="Enter your full name"
									required
								/>
							</div>
						)}

						<div className="auth-form-group">
							<label htmlFor="email">Email Address</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								placeholder="Enter your email"
								required
							/>
						</div>

						<div className="auth-form-group">
							<label htmlFor="password">Password</label>
							<input
								type="password"
								id="password"
								name="password"
								value={formData.password}
								onChange={handleChange}
								placeholder={
									mode === "signin"
										? "Enter your password"
										: "Create a password"
								}
								required
							/>
						</div>

						{mode === "signin" && (
							<div className="auth-form-options">
								<label className="auth-checkbox">
									<input type="checkbox" />
									<span className="auth-checkbox-text">Remember me</span>
								</label>
								<a href="#" className="auth-forgot-link">
									Forgot password?
								</a>
							</div>
						)}

						<button type="submit" className="auth-modal-button">
							{mode === "signin" ? "Sign In" : "Create Account"}
						</button>

						<div className="auth-modal-footer">
							{mode === "signin" ? (
								<>
									Don't have an account?{" "}
									<button
										type="button"
										className="auth-modal-link"
										onClick={() => onSwitchMode("signup")}
									>
										Sign up
									</button>
								</>
							) : (
								<>
									Already have an account?{" "}
									<button
										type="button"
										className="auth-modal-link"
										onClick={() => onSwitchMode("signin")}
									>
										Sign in
									</button>
								</>
							)}
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AuthModal;
