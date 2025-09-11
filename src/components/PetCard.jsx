import React, { useState } from "react";
import PetModal from "./PetModal";

const PetCard = ({ pet }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleAdoptClick = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<div className="pet-card">
				<div className="pet-placeholder">
					<div className="pet-icon-large">
						{pet.type === "dog" ? "🐕" : "🐱"}
					</div>
					<p className="pet-placeholder-text">Photo Coming Soon</p>
				</div>
				<div className="pet-info">
					<h3 className="pet-name">{pet.name}</h3>
					<div className="pet-details">
						<span className="pet-age">{pet.age}</span>
						<span className="pet-breed">{pet.breed}</span>
					</div>
					<button className="adopt-btn" onClick={handleAdoptClick}>
						Adopt Me
					</button>
				</div>
			</div>

			<PetModal pet={pet} isOpen={isModalOpen} onClose={handleCloseModal} />
		</>
	);
};

export default PetCard;
