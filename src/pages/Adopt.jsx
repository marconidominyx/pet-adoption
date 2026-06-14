import { useState } from "react";
import PetModal from "../components/PetModal";

const pets = [
	{ id: 1, name: "Sunny", type: "Dog", age: "3 years", breed: "Golden mix", sex: "Male", tag: "Chief optimist", tagline: "Sunny believes every stranger is simply a friend running late.", description: "A joyful, affectionate companion who is happiest near people and very serious about afternoon walks.", story: "Sunny arrived thin, tired, and still wagging. A few months of good meals and patient care brought his sparkle right back.", image: "/images/cap_dog.png" },
	{ id: 2, name: "Milo", type: "Dog", age: "2 years", breed: "Shiba mix", sex: "Male", tag: "Tiny comedian", tagline: "An independent thinker with excellent timing and an unforgettable smile.", description: "Milo is clever, calm, and wonderfully expressive. He would love a home with a sunny window and a patient friend.", story: "Milo was found wandering alone outside the city. He took his time trusting us, and now greets the team with a grin every morning.", image: "/images/image 1.png" },
	{ id: 3, name: "Coco", type: "Dog", age: "4 years", breed: "Local mix", sex: "Female", tag: "Gentle soul", tagline: "Soft-hearted, low-key, and always ready to keep you company.", description: "Coco has the calm energy of a dog who knows the best things in life are unhurried.", story: "Coco came to us with a litter of puppies. She raised them beautifully and is finally ready for a home of her own.", image: "/images/Bacolod-1.png" },
	{ id: 4, name: "The Porch Crew", type: "Dog", age: "1–5 years", breed: "Wonderful mixes", sex: "Mixed", tag: "Social club", tagline: "A lively cast of characters, each waiting for the right co-star.", description: "From brave explorers to champion nappers, there is a personality for every kind of home.", story: "Our porch crew changes as adoptions happen and new rescues arrive. Ask us who might be your perfect match.", image: "/images/Bacolod-2.png" },
	{ id: 5, name: "Ginger", type: "Cat", age: "1 year", breed: "Orange tabby", sex: "Female", tag: "Curious artist", tagline: "Part acrobat, part philosopher, entirely convinced she belongs near you.", description: "Ginger is playful, observant, and happiest when she has a high perch and a human to supervise.", story: "Ginger was discovered near a busy roadside and quickly proved that she was ready for a quieter, much more interesting life indoors.", image: "/images/536568e9850470ab5e04aa780cb2c55c 1.png" },
];

const Adopt = () => {
	const [activeFilter, setActiveFilter] = useState("All");
	const [selectedPet, setSelectedPet] = useState(null);
	const filteredPets = activeFilter === "All" ? pets : pets.filter((pet) => pet.type === activeFilter);

	return (
		<div className="page adopt-page">
			<section className="page-hero">
				<div className="wrap page-hero-grid">
					<div><span className="eyebrow">Available souls</span><h1 className="display">Find your kindred spirit.</h1></div>
					<div className="page-hero-copy">
						<p>Every soul in our sanctuary has a story. Take your time, read the field notes, and let the right connection announce itself.</p>
						<div className="filters">
							{["All", "Dog", "Cat"].map((filter) => <button key={filter} className={`filter ${activeFilter === filter ? "active" : ""}`} onClick={() => setActiveFilter(filter)}>{filter === "All" ? "Everyone" : `${filter}s`}</button>)}
						</div>
					</div>
				</div>
			</section>
			<section className="section">
				<div className="wrap adopt-grid">
					{filteredPets.map((pet) => (
						<article className="pet-card" key={pet.id} onClick={() => setSelectedPet(pet)} tabIndex="0" onKeyDown={(event) => event.key === "Enter" && setSelectedPet(pet)}>
							<div className="pet-card-image"><img src={pet.image} alt={pet.name} /><span className="pet-tag">{pet.tag}</span></div>
							<div className="pet-card-copy"><h2>{pet.name}</h2><p>{pet.tagline}</p><button className="text-link">Read the field notes <span className="material-symbols-outlined">arrow_forward</span></button></div>
						</article>
					))}
				</div>
			</section>
			<section className="connection-break">
				<div className="connection-photo"><img src="/images/Bacolod-5.png" alt="People building trust with rescued dogs" /></div>
				<div className="connection-copy">
					<span className="eyebrow">Connection beyond words</span>
					<h2 className="display">The quiet click.</h2>
					<p>It happens in a shared glance, a careful first touch, or the moment a nervous tail decides to wag. We give every match enough time to feel real.</p>
				</div>
			</section>
			<section className="section adoption-steps">
				<div className="wrap">
					<div className="section-head help-head">
						<div><span className="eyebrow">How adoption works</span><h2 className="display">Four good steps.</h2></div>
						<p>No speed dating. No pressure. Just an honest process built for lasting matches.</p>
					</div>
					<div className="process-grid">
						{[
							["01", "Say hello", "Tell us about your home, routine, and the kind of companion you imagine."],
							["02", "Meet slowly", "Spend time together and let their real personality come forward."],
							["03", "Prepare home", "We help with the practical details, from supplies to settling-in plans."],
							["04", "Stay connected", "After adoption, we remain available for questions, wins, and wobbly days."],
						].map(([number, title, copy]) => <article className="process-card" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
					</div>
				</div>
			</section>
			<PetModal pet={selectedPet} isOpen={Boolean(selectedPet)} onClose={() => setSelectedPet(null)} />
		</div>
	);
};

export default Adopt;
