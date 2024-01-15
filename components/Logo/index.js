import React from "react";
import styled from "styled-components";

export default function Logo() {
	return (
		<>
			<LogoContainer>LOGO</LogoContainer>
		</>
	);
}

const LogoContainer = styled.div`
	width: 100%;
	position: unset !important;

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
