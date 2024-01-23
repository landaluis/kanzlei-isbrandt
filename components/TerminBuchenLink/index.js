import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function TerminBuchenLink({ currentLanguage }) {
	return (
		<>
			<Link href="/TerminBuchen">
				<TerminBuchen>
					{currentLanguage === "DE" ? "Termin Buchen" : "Book appointment"}
				</TerminBuchen>
			</Link>
		</>
	);
}

const TerminBuchen = styled.button`
	background-color: rgba(26, 77, 97, 0.1);
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
	border: 1px solid #1a4d61;
	padding: 0.5rem;
	border-radius: 5px;
	margin: 0;
	cursor: pointer;
	font-size: 1.1rem;
	color: #1a4d61;
	font-family: Ruluko-Regular, sans-serif;

	@media (max-width: 768px) {
		font-size: 1.5rem;
		margin-top: 2rem;
	}
`;
