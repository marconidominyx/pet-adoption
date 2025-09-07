import React, { useState } from "react";
import Hero from "../components/Hero";
import PetGrid from "../components/PetGrid";
import AboutPreview from "../components/AboutPreview";

const Home = () => {
	const [selectedCategory, setSelectedCategory] = useState("all");

	return (
		<div className="home-page">
			<Hero />
			<AboutPreview />
			<PetGrid
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
			/>
		</div>
	);
};

export default Home;
