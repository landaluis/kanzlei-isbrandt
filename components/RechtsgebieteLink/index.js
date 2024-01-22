import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

export default function RechtsgebieteLink() {
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
				<DropdownButton onClick={handleToggle}>Rechtsgebiete</DropdownButton>
				<DropdownContent isOpen={isOpen}>
					<Link href="/Migrationsrecht" style={{ textDecoration: "none" }}>
						<DropdownLink>Migrationsrecht</DropdownLink>
					</Link>
					<Link href="/Arbeitsrecht" style={{ textDecoration: "none" }}>
						<DropdownLink>Arbeitsrecht</DropdownLink>
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
`;
