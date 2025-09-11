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
			sex: "Female",
			description:
				"Alaia is a gentle and loving dog who adores children and gets along well with other pets. She's house-trained and loves going for walks in the park.",
			story:
				"Alaia was found wandering the streets of Bacolod City, malnourished and scared. Our rescue team took her in and nursed her back to health. She's now ready for a forever home where she can share her endless love and loyalty.",
		},
		{
			id: 2,
			name: "Arrow",
			type: "dog",
			age: "1 year",
			breed: "Mixed",
			sex: "Male",
			description:
				"Arrow is an energetic young pup who loves to play fetch and run around. He's very intelligent and learns commands quickly. Perfect for an active family!",
			story:
				"Arrow was rescued from a construction site where he was living among debris. Despite his rough start, he's incredibly friendly and eager to please. He's looking for a family who can match his energy and give him the exercise he needs.",
		},
		{
			id: 3,
			name: "Bato",
			type: "dog",
			age: "3 years",
			breed: "Mixed",
			sex: "Male",
			description:
				"Bato is a calm and protective dog who makes an excellent guard dog. He's loyal to his family and gentle with children. He's already trained and well-behaved.",
			story:
				"Bato's previous owner had to move overseas and couldn't take him along. He's been waiting for a new family for several months. This loyal companion deserves a loving home where he can continue to be the faithful protector he was born to be.",
		},
		{
			id: 4,
			name: "Bella",
			type: "dog",
			age: "4 years",
			breed: "Mixed",
			sex: "Female",
			description:
				"Bella is a sweet and gentle dog who loves cuddles and belly rubs. She's great with kids and other animals. She's house-trained and knows basic commands.",
			story:
				"Bella was surrendered by her previous family due to housing restrictions. She's been with us for a while, and we can't understand why she hasn't been adopted yet. She's such a loving and well-behaved dog who would make any family complete.",
		},
		{
			id: 5,
			name: "Bonnie",
			type: "dog",
			age: "2 years",
			breed: "Mixed",
			sex: "Female",
			description:
				"Bonnie is a playful and affectionate dog who loves to be the center of attention. She's great with children and enjoys playing games. She's very social and loves meeting new people.",
			story:
				"Bonnie was found abandoned in a cardboard box near our shelter. Despite her difficult beginning, she's incredibly loving and trusting. She's ready to bring joy and laughter to her new family.",
		},
		{
			id: 6,
			name: "Colette",
			type: "cat",
			age: "1 year",
			breed: "Tabby",
			sex: "Female",
			description:
				"Colette is a curious and playful young cat who loves to explore and climb. She's very affectionate and enjoys being petted. She's litter-trained and gets along with other cats.",
			story:
				"Colette was found as a tiny kitten in a storm drain during heavy rains. Our team rescued her and bottle-fed her until she was strong enough. She's grown into a beautiful, healthy cat ready for her forever home.",
		},
		{
			id: 7,
			name: "Diana",
			type: "dog",
			age: "3 years",
			breed: "Mixed",
			sex: "Female",
			description:
				"Diana is a graceful and elegant dog who loves to run and play. She's very intelligent and responds well to training. She's great with families and loves outdoor activities.",
			story:
				"Diana was rescued from a neglectful situation where she wasn't receiving proper care. Despite her past, she's incredibly resilient and loving. She's looking for a family who will appreciate her gentle nature and give her the love she deserves.",
		},
		{
			id: 8,
			name: "Max",
			type: "dog",
			age: "2 years",
			breed: "Mixed",
			sex: "Male",
			description:
				"Max is a friendly and outgoing dog who loves to play and socialize. He's great with kids and other dogs. He's very active and would do well with an active family.",
			story:
				"Max was found tied to a tree in a park, abandoned by his previous owners. Despite this betrayal, he's incredibly trusting and loving. He's ready to give his heart to a family who will never leave him behind.",
		},
		{
			id: 9,
			name: "Luna",
			type: "cat",
			age: "1 year",
			breed: "Mixed",
			sex: "Female",
			description:
				"Luna is a gentle and quiet cat who loves to cuddle and purr. She's very calm and would be perfect for a quiet household. She's litter-trained and loves to be brushed.",
			story:
				"Luna was found as a stray kitten, very shy and scared of humans. With patience and love, she's learned to trust again. She's now a sweet, loving cat who's ready to be someone's loyal companion.",
		},
		{
			id: 10,
			name: "Buddy",
			type: "dog",
			age: "4 years",
			breed: "Mixed",
			sex: "Male",
			description:
				"Buddy is a loyal and devoted dog who loves his family deeply. He's very protective and gentle with children. He's house-trained and knows many commands.",
			story:
				"Buddy's owner passed away, and his family couldn't keep him. He's been grieving the loss of his beloved human, but he's ready to open his heart to a new family. This loyal companion deserves all the love in the world.",
		},
		{
			id: 11,
			name: "Milo",
			type: "dog",
			age: "2 years",
			breed: "Mixed",
			sex: "Male",
			description:
				"Milo is a fun-loving and energetic dog who brings joy wherever he goes. He loves to play fetch and go for walks. He's great with kids and other pets.",
			story:
				"Milo was rescued from a puppy mill where he was kept in terrible conditions. Despite his traumatic past, he's incredibly resilient and loving. He's ready to experience the joy of a real home and family.",
		},
		{
			id: 12,
			name: "Whiskers",
			type: "cat",
			age: "3 years",
			breed: "Mixed",
			sex: "Male",
			description:
				"Whiskers is a mature and wise cat who loves to lounge in sunny spots. He's very independent but also enjoys human company. He's perfect for someone who wants a calm, low-maintenance pet.",
			story:
				"Whiskers was surrendered by his elderly owner who could no longer care for him. He's been waiting patiently for a new home where he can spend his golden years in comfort and love. This gentle soul deserves a peaceful retirement.",
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
