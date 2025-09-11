import React from "react";
import "./PetModal.css";

const PetModal = ({ pet, isOpen, onClose }) => {
	if (!isOpen || !pet) return null;

	return (
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<button className="modal-close" onClick={onClose}>
					&times;
				</button>

				<div className="modal-header">
					<div className="pet-icon-large">
						{pet.type === "dog" ? "🐕" : "🐱"}
					</div>
					<h2 className="modal-pet-name">{pet.name}</h2>
				</div>

				<div className="modal-body">
					<div className="pet-details-grid">
						<div className="detail-item">
							<span className="detail-label">Age:</span>
							<span className="detail-value">{pet.age}</span>
						</div>
						<div className="detail-item">
							<span className="detail-label">Breed:</span>
							<span className="detail-value">{pet.breed}</span>
						</div>
						<div className="detail-item">
							<span className="detail-label">Sex:</span>
							<span className="detail-value">{pet.sex}</span>
						</div>
						<div className="detail-item">
							<span className="detail-label">Type:</span>
							<span className="detail-value capitalize">{pet.type}</span>
						</div>
					</div>

					<div className="pet-description">
						<h3>About {pet.name}</h3>
						<p>{pet.description}</p>
					</div>

					<div className="pet-story">
						<h3>{pet.name}'s Story</h3>
						<p>{pet.story}</p>
					</div>
				</div>

				<div className="modal-footer">
					<button className="adopt-now-btn" onClick={onClose}>
						Adopt {pet.name} Now
					</button>
					<button className="close-btn" onClick={onClose}>
						Close
					</button>
				</div>
			</div>
		</div>
	);
};

export default PetModal;
