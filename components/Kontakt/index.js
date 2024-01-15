import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function Kontakt() {
	return (
		<>
			<Link href="/Kontakt">
				<KontaktLink>Kontakt</KontaktLink>
			</Link>
		</>
	);
}

const KontaktLink = styled.button`
	background-color: transparent;
	border: none;
	padding: 0;
	margin: 0;
	cursor: pointer;
	font-size: 1rem;
`;
