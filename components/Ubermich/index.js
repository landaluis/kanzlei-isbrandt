import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function Ubermich() {
	return (
		<>
			<Link href="/Ubermich">
				<UbermichLink>Über mich</UbermichLink>
			</Link>
		</>
	);
}

const UbermichLink = styled.button`
	background-color: transparent;
	border: none;
	padding: 0;
	margin: 0;
	cursor: pointer;
	font-size: 1rem;
`;
