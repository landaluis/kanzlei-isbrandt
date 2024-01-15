import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function TerminBuchen() {
	return (
		<>
			<Link href="/TerminBuchen">
				<TerminBuchenLink>Termin Buchen</TerminBuchenLink>
			</Link>
		</>
	);
}

const TerminBuchenLink = styled.button`
	background-color: transparent;
	border: none;
	padding: 0;
	margin: 0;
	cursor: pointer;
	font-size: 1rem;
`;
