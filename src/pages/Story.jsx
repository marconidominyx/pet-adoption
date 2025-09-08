import React from "react";
import OurStory from "../components/OurStory";
import { useNavigate } from "react-router-dom";

const Story = () => {
	const navigate = useNavigate();

	return (
		<div className="story-page">
			<OurStory
				onDonateClick={() =>
					window.dispatchEvent(new CustomEvent("openDonationModal"))
				}
				onGetInvolved={() => navigate("/signup")}
			/>
		</div>
	);
};

export default Story;
