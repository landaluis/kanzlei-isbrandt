import React from "react";
import styled from "styled-components";
import AblaufKosten from "../AblaufKosten";
import Kontakt from "../Kontakt";
import Rechtsgebiete from "../Rechtsgebiete";
import Ubermich from "../Ubermich";
import TerminBuchen from "../TerminBuchen";

export default function RightNavBar({}) {
	return (
		<RightNavBarContainer>
			<Rechtsgebiete />
			<AblaufKosten />
			<Ubermich />
			<Kontakt />
			<TerminBuchen />
		</RightNavBarContainer>
	);
}

const RightNavBarContainer = styled.div`
display: flex;
align-items: center;
grid-column-gap: 3rem;
}

@media (max-width: 768px) {
	grid-column-gap: 1rem;
}

@media (max-width: 420px) {
	grid-column-gap: 0.5rem;
}
`;
