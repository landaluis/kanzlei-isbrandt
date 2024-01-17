import React from "react";
import styled from "styled-components";
import AblaufKostenLink from "../AblaufKostenLink";
import KontaktLink from "../KontaktLink";
import RechtsgebieteLink from "../RechtsgebieteLink";
import UbermichLink from "../UbermichLink";
import TerminBuchenLink from "../TerminBuchenLink";

export default function RightNavBar({}) {
	return (
		<RightNavBarContainer>
			<RechtsgebieteLink />
			<AblaufKostenLink />
			<UbermichLink />
			<KontaktLink />
			<TerminBuchenLink />
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
