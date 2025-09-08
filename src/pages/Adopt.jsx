import React, { useState } from "react";
import PetGrid from "../components/PetGrid";

const Adopt = () => {
	const [activeFilter, setActiveFilter] = useState("All");

	const pets = [
		{ name: "Alaia", age: "2 years", breed: "Mixed", type: "Dog" },
		{ name: "Arrow", age: "1 year", breed: "Mixed", type: "Dog" },
		{ name: "Bato", age: "3 years", breed: "Mixed", type: "Dog" },
		{ name: "Bella", age: "4 years", breed: "Mixed", type: "Dog" },
		{ name: "Bonnie", age: "2 years", breed: "Mixed", type: "Dog" },
		{ name: "Colette", age: "1 year", breed: "Tabby", type: "Cat" },
		{ name: "Diana", age: "3 years", breed: "Mixed", type: "Dog" },
		{ name: "Max", age: "2 years", breed: "Mixed", type: "Dog" },
		{ name: "Luna", age: "1 year", breed: "Mixed", type: "Cat" },
		{ name: "Buddy", age: "4 years", breed: "Mixed", type: "Dog" },
		{ name: "Milo", age: "2 years", breed: "Mixed", type: "Dog" },
		{ name: "Whiskers", age: "3 years", breed: "Mixed", type: "Cat" },
	];

	const filteredPets =
		activeFilter === "All"
			? pets
			: pets.filter((pet) => pet.type === activeFilter);

	return (
		<section className="pet-grid-section">
			<div className="container">
				<div className="section-header">
					<h2 className="section-title">Find Your Perfect Companion</h2>
					<div className="category-filters">
						<button
							className={`filter-btn ${activeFilter === "All" ? "active" : ""}`}
							onClick={() => setActiveFilter("All")}
						>
							All
						</button>
						<button
							className={`filter-btn ${activeFilter === "Dog" ? "active" : ""}`}
							onClick={() => setActiveFilter("Dog")}
						>
							Dogs
						</button>
						<button
							className={`filter-btn ${activeFilter === "Cat" ? "active" : ""}`}
							onClick={() => setActiveFilter("Cat")}
						>
							Cats
						</button>
					</div>
				</div>
				<div className="pet-grid">
					{filteredPets.map((pet, index) => (
						<div className="pet-card" key={index}>
							<div className="pet-placeholder">
								<div className="pet-icon-large">
									{pet.type === "Dog" ? "🐕" : "🐱"}
								</div>
								<p className="pet-placeholder-text">Photo Coming Soon</p>
							</div>
							<div className="pet-info">
								<h3 className="pet-name">{pet.name}</h3>
								<div className="pet-details">
									<span className="pet-age">{pet.age}</span>
									<span className="pet-breed">{pet.breed}</span>
								</div>
								<button className="adopt-btn">Adopt Me</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Adopt;
