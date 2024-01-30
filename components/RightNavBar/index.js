import React from "react";
import styled from "styled-components";
import AblaufKostenLink from "../AblaufKostenLink";
import KontaktLink from "../KontaktLink";
import RechtsgebieteLink from "../RechtsgebieteLink";
import UbermichLink from "../UbermichLink";
import TerminBuchenLink from "../TerminBuchenLink";
import LanguageSwitcher from "../LenguageSwitcher";

export default function RightNavBar({ handleClick, currentLanguage, open }) {
	return (
		<RightNavBarContainer open={open}>
			<RechtsgebieteLink
				handleClick={handleClick}
				currentLanguage={currentLanguage}
			/>
			<AblaufKostenLink
				handleClick={handleClick}
				currentLanguage={currentLanguage}
			/>
			<UbermichLink
				handleClick={handleClick}
				currentLanguage={currentLanguage}
			/>
			<KontaktLink
				handleClick={handleClick}
				currentLanguage={currentLanguage}
			/>
			<TerminBuchenLink
				handleClick={handleClick}
				currentLanguage={currentLanguage}
			/>
			<LanguageSwitcher
				handleClick={handleClick}
				currentLanguage={currentLanguage}
			/>
		</RightNavBarContainer>
	);
}

const RightNavBarContainer = styled.div`
display: flex;
align-items: center;
grid-column-gap: 3rem;
}

@media (max-width: 1024px) {
	grid-column-gap: 2rem;
}

@media (max-width: 960px) {
	grid-column-gap: 1rem;

	@media (max-width: 960px) {
		font-size: 3rem;
		flex-flow: column nowrap;
		background-color: #f8f8f8;
		position: fixed;
		transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
		top: 2rem;
		right: 0;
		height: 30rem;
		width: 300px;
		padding-top: 3.5rem;
		transition: transform 0.3s ease-in-out;
		box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);

}

@media (max-width: 420px) {
	grid-column-gap: 0.5rem;
}
`;
