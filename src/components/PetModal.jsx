const PetModal = ({ pet, isOpen, onClose }) => {
	if (!isOpen || !pet) return null;

	return (
		<div className="pet-modal-overlay" onClick={onClose}>
			<div className="pet-modal" onClick={(event) => event.stopPropagation()}>
				<div className="pet-modal-photo"><img src={pet.image} alt={pet.name} /></div>
				<div className="pet-modal-body">
					<button className="modal-close" onClick={onClose} aria-label="Close"><span className="material-symbols-outlined">close</span></button>
					<span className="eyebrow">{pet.tag}</span>
					<h2 className="display">{pet.name}</h2>
					<p className="pet-modal-tagline">{pet.tagline}</p>
					<div className="pet-specs">
						<div className="pet-spec"><small>Age</small>{pet.age}</div>
						<div className="pet-spec"><small>Breed</small>{pet.breed}</div>
						<div className="pet-spec"><small>Sex</small>{pet.sex}</div>
						<div className="pet-spec"><small>Species</small>{pet.type}</div>
					</div>
					<p className="pet-modal-story"><strong>About:</strong> {pet.description}</p>
					<p className="pet-modal-story"><strong>Field notes:</strong> {pet.story}</p>
					<button className="button button--blue" onClick={() => alert(`Thanks for asking about ${pet.name}! We will be in touch.`)}>Ask about {pet.name}</button>
				</div>
			</div>
		</div>
	);
};

export default PetModal;
