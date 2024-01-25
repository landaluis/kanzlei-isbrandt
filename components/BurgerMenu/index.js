import React, { useState } from "react";
import styled from "styled-components";
import RightNavBar from "../RightNavBar";

export default function Burger({ handleClick, currentLanguage }) {
	const [open, setOpen] = useState(false);

	return (
		<>
			<StyledBurger open={open} onClick={() => setOpen(!open)}>
				<div />
				<div />
				<div />
			</StyledBurger>
			<RightNavBar
				open={open}
				handleClick={handleClick}
				currentLanguage={currentLanguage}
			/>
		</>
	);
}
const StyledBurger = styled.div`
	width: 2rem;
	height: 2rem;
	position: fixed;
	top: 3.2rem;
	right: 3rem;
	z-index: 20;
	display: none;

	@media (max-width: 960px) {
		display: flex;
		justify-content: space-around;
		flex-flow: column nowrap;
	}

	@media (max-width: 320px) {
		top: 2.5rem;
		right: 2rem;
	}

	div {
		width: 2rem;
		height: 0.25rem;
		background-color: ${({ open }) => (open ? "#ccc" : "#1a4d61")};
		border-radius: 10px;
		transform-origin: 1px;
		transition: all 0.3s linear;

		&:nth-child(1) {
			transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
		}

		&:nth-child(2) {
			transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
			opacity: ${({ open }) => (open ? 0 : 1)};
		}

		&:nth-child(3) {
			transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
		}
	}
`;
