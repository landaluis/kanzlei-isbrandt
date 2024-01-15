import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function Impressum() {
	return (
		<>
			<Link href="/Impressum">
				<ImpressumLink>Impressum</ImpressumLink>
			</Link>
		</>
	);
}

const ImpressumLink = styled.button`
	background-color: transparent;
	border: none;
	padding: 0;
	margin: 0;
	cursor: pointer;
	font-size: 1rem;
`;
