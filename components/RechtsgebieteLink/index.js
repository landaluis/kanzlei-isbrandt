import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

export default function RechtsgebieteLink({ currentLanguage }) {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	const handleClickOutside = (event) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		window.addEventListener("click", handleClickOutside);
		return () => {
			window.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return (
		<>
			<DropdownContainer ref={dropdownRef}>
				<DropdownButton onClick={handleToggle}>
					{" "}
					{currentLanguage === "DE" ? "Rechtsgebiete" : "Fields of law"}
				</DropdownButton>
				<DropdownContent isOpen={isOpen}>
					<Link href="/Migrationsrecht" style={{ textDecoration: "none" }}>
						<DropdownLink>
							{currentLanguage === "DE" ? "Migrationsrecht" : "Immigration Law"}
						</DropdownLink>
					</Link>
					<Link href="/Arbeitsrecht" style={{ textDecoration: "none" }}>
						<DropdownLink>
							{currentLanguage === "DE" ? "Arbeitsrecht" : "Employment Law "}
						</DropdownLink>
					</Link>
				</DropdownContent>
			</DropdownContainer>
		</>
	);
}
const DropdownContainer = styled.div`
	position: relative;
	display: inline-block;
`;

const DropdownButton = styled.button`
	background-color: #f8f8f8;
	color: #1a4d61;
	font-size: 1.1rem;
	font-family: Ruluko-Regular, sans-serif;
	padding: 10px;
	border: none;
	cursor: pointer;

	@media (max-width: 768px) {
		font-size: 1.5rem;
	}
`;

const DropdownContent = styled.div`
	display: ${(props) => (props.isOpen ? "block" : "none")};
	position: absolute;
	background-color: #f9f9f9;
	min-width: 160px;
	box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	z-index: 1;
	border-radius: 5px;
`;

const DropdownLink = styled.div`
	background-color: transparent;
	cursor: pointer;
	display: block;
	padding: 12px;
	text-decoration: none;
	color: #1a4d61;
	&:hover {
		background-color: #ddd;
	}

	@media (max-width: 768px) {
		font-size: 1.5rem;
	}
`;
