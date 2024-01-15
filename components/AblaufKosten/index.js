import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function AblaufKosten() {
	return (
		<>
			<Link href="/AblaufKosten">
				<AblaufKostenLink>Ablauf & Kosten</AblaufKostenLink>
			</Link>
		</>
	);
}

const AblaufKostenLink = styled.button`
	background-color: transparent;
	border: none;
	padding: 0;
	margin: 0;
	cursor: pointer;
	font-size: 1rem;
`;
