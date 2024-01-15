import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function Rechtsgebiete() {
	return (
		<>
			<Link href="/Rechstgebiete">
				<RechtsgebieteLink>Rechtsgebiete</RechtsgebieteLink>
			</Link>
		</>
	);
}

const RechtsgebieteLink = styled.button`
	background-color: transparent;
	border: none;
	padding: 0;
	margin: 0;
	cursor: pointer;
	font-size: 1rem;
`;
