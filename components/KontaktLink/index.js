import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function KontaktLink({ currentLanguage }) {
	return (
		<>
			<Link href="/Kontakt">
				<Kontakt>{currentLanguage === "DE" ? "Kontakt" : "Contact"}</Kontakt>
			</Link>
		</>
	);
}

const Kontakt = styled.button`
	background-color: transparent;
	border: none;
	padding: 0;
	margin: 0;
	cursor: pointer;
	font-size: 1.1rem;
	color: #1a4d61;
	font-family: Ruluko-Regular, sans-serif;

	@media (max-width: 768px) {
		font-size: 1.5rem;
	}
`;
