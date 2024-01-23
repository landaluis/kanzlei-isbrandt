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
	background-color: transparent;
	border: none;
	padding: 0;
	margin: 0;
	cursor: pointer;
	font-size: 1.1rem;
	color: #1a4d61;
	font-family: Ruluko-Regular, sans-serif;
`;
