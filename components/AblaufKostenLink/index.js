import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function AblaufKostenLink({ currentLanguage }) {
	return (
		<>
			<Link href="/AblaufKosten">
				<AblaufKosten>
					{currentLanguage === "DE"
						? "Ablauf und Kosten"
						: "Procedure and costs"}
				</AblaufKosten>
			</Link>
		</>
	);
}

const AblaufKosten = styled.button`
	background-color: transparent;
	border: none;
	padding: 0;
	margin: 0;
	cursor: pointer;
	font-size: 1.1rem;
	color: #1a4d61;
	font-family: Ruluko-Regular, sans-serif;
`;
