import React from "react";
import PetCard from "./PetCard";

const PetGrid = ({ selectedCategory, setSelectedCategory }) => {
	// Pet data without images - using placeholder data
	const pets = [
		{
			id: 1,
			name: "Alaia",
			type: "dog",
			age: "2 years",
			breed: "Mixed",
		},
		{
			id: 2,
			name: "Arrow",
			type: "dog",
			age: "1 year",
			breed: "Mixed",
		},
		{
			id: 3,
			name: "Bato",
			type: "dog",
			age: "3 years",
			breed: "Mixed",
		},
		{
			id: 4,
			name: "Bella",
			type: "dog",
			age: "4 years",
			breed: "Mixed",
		},
		{
			id: 5,
			name: "Bonnie",
			type: "dog",
			age: "2 years",
			breed: "Mixed",
		},
		{
			id: 6,
			name: "Colette",
			type: "cat",
			age: "1 year",
			breed: "Tabby",
		},
		{
			id: 7,
			name: "Diana",
			type: "dog",
			age: "3 years",
			breed: "Mixed",
		},
		{
			id: 8,
			name: "Max",
			type: "dog",
			age: "2 years",
			breed: "Mixed",
		},
		{
			id: 9,
			name: "Luna",
			type: "cat",
			age: "1 year",
			breed: "Mixed",
		},
		{
			id: 10,
			name: "Buddy",
			type: "dog",
			age: "4 years",
			breed: "Mixed",
		},
		{
			id: 11,
			name: "Milo",
			type: "dog",
			age: "2 years",
			breed: "Mixed",
		},
		{
			id: 12,
			name: "Whiskers",
			type: "cat",
			age: "3 years",
			breed: "Mixed",
		},
	];

	const filteredPets =
		selectedCategory === "all"
			? pets
			: pets.filter((pet) => pet.type === selectedCategory);

	return (
		<section className="pet-grid-section">
			<div className="container">
				<div className="section-header">
					<h2 className="section-title">Find Your Perfect Companion</h2>
					<div className="category-filters">
						<button
							className={`filter-btn ${
								selectedCategory === "all" ? "active" : ""
							}`}
							onClick={() => setSelectedCategory("all")}
						>
							All
						</button>
						<button
							className={`filter-btn ${
								selectedCategory === "dog" ? "active" : ""
							}`}
							onClick={() => setSelectedCategory("dog")}
						>
							Dogs
						</button>
						<button
							className={`filter-btn ${
								selectedCategory === "cat" ? "active" : ""
							}`}
							onClick={() => setSelectedCategory("cat")}
						>
							Cats
						</button>
					</div>
				</div>

				<div className="pet-grid">
					{filteredPets.map((pet) => (
						<PetCard key={pet.id} pet={pet} />
					))}
				</div>
			</div>
		</section>
	);
};

export default PetGrid;
