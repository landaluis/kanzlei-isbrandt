import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function LanguageSwitcher({ handleClick, currentLanguage }) {
	return (
		<>
			<Button onClick={handleClick}>
				{" "}
				{currentLanguage === "DE" ? "EN" : "DE"}
			</Button>
		</>
	);
}

const Button = styled.button`
	background-color: #1a4d61;
	color: #fff;
	padding: 5px 10px;
	cursor: pointer;
	border-radius: 5px;
	position: relative;

	@media (max-width: 768px) {
		margin-top: 2rem;
	}
`;
