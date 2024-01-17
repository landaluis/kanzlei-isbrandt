import React from "react";
import styled from "styled-components";
import Logo from "../Logo";
import RightNavBar from "../RightNavBar";

export default function Header({}) {
	return (
		<HeaderContainer>
			<Logo></Logo>
			<RightNavBar></RightNavBar>
		</HeaderContainer>
	);
}

const HeaderContainer = styled.div`
	z-index: 50;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	// background-color: rgba(255, 255, 255, 0.95);
	background-color: #f8f8f8;
	padding: 1.5rem 3rem 1.2rem;
	position: fixed;
	top: 0;
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);

	@media (max-width: 1024px) {
		padding: 1.5rem 2rem 1.2rem;
	}
	@media (max-width: 768px) {
		padding: 1rem;
	}
`;
