import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function AblaufKostenLink() {
	return (
		<>
			<Link href="/AblaufKosten">
				<AblaufKosten>Ablauf und Kosten</AblaufKosten>
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
	font-size: 1rem;
	color: #7a8387;
	font-family: Ruluko-Regular, sans-serif;
`;
