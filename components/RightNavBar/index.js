import React from "react";
import styled from "styled-components";
import AblaufKostenLink from "../AblaufKostenLink";
import KontaktLink from "../KontaktLink";
import RechtsgebieteLink from "../RechtsgebieteLink";
import UbermichLink from "../UbermichLink";
import TerminBuchenLink from "../TerminBuchenLink";
import LanguageSwitcher from "../LenguageSwitcher";
import { useState } from "react";

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

@media (max-width: 768px) {
	grid-column-gap: 1rem;

	@media (max-width: 768px) {
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

// const BurgerButton = styled.div`
// 	cursor: pointer;
// 	padding: 10px;
// 	display: none;

// 	@media (max-width: 768px) {
// 		display: block;
// 	}

// 	div {
// 		width: 25px;
// 		height: 3px;
// 		background-color: #333;
// 		margin: 5px 0;
// 		transition: 0.4s;
// 	}
`;

// const NavMenu = styled.div`;
// 	display: flex;
// 	display: flex;
// align-items: center;
// grid-column-gap: 3rem;
// }

// @media (max-width: 768px) {
// 	grid-column-gap: 1rem;

// }

// @media (max-width: 420px) {
// 	// grid-column-gap: 0.5rem;

// 	@media (max-width: 768px) {
// 		flex-direction: column;
// 		position: absolute;
// 		top: 60px;
// 		left: 0;
// 		background-color: #fff;
// 		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
// 		width: 100%;
// 		max-height: ${(props) => (props.isOpen ? "300px" : "0")};
// 		overflow: hidden;
// 		transition: max-height 0.3s ease-in-out;
// 	}
// `;

// const NavItem = styled.div`
// 	padding: 10px;
// 	cursor: pointer;

// 	&:hover {
// 		background-color: #f0f0f0;
// 	}
// `;
