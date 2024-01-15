import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function Logo() {
	return (
		<>
			<Link href="/">
				<LogoContainer> Kanzlei Isbrandt LOGO</LogoContainer>
			</Link>
		</>
	);
}

const LogoContainer = styled.div`
	width: 100%;
	position: unset !important;
	border: 1px solid black;
	position: relative;
	width: 151px;
	height: auto;

	@media (max-width: 768px) {
		width: 120px;
	}

	@media (max-width: 402px) {
		width: 100px;
	}
`;
