import React from "react";
import styled from "styled-components";
import Logo from "../Logo";
import RightNavBar from "../RightNavBar";
import Burger from "../BurgerMenu";

export default function Header({ handleClick, currentLanguage, open }) {
	return (
		<HeaderContainer>
			<Logo />
			<Burger
				open={open}
				handleClick={handleClick}
				currentLanguage={currentLanguage}
			/>
			{/* <RightNavBar
				handleClick={handleClick}
				currentLanguage={currentLanguage}
			/> */}
		</HeaderContainer>
	);
}

const HeaderContainer = styled.div`
	z-index: 50;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	background-color: #f8f8f8;
	padding: 0.2rem 3rem 0.2rem;
	position: fixed;
	top: 0;
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);

	@media (max-width: 1024px) {
		padding: 1.5rem 2rem 1.2rem;
	}
	@media (max-width: 768px) {
		padding: 1rem;
	}

	@media (max-width: 320px) {
		padding: 0.2rem;
		justify-content: space-between;
	}
`;
