import React from "react";
import styled from "styled-components";
import Impressum from "../Impressum";

export default function Footer() {
	return (
		<>
			<FooterContainer>
				<Impressum />
			</FooterContainer>
		</>
	);
}

const FooterContainer = styled.div`
	background-color: darkgray;
	color: white;
	padding: 10px;
	text-align: center;
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 8rem;
`;
