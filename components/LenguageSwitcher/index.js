import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function LanguageSwitcher({ handleClick, currentLanguage }) {
	return (
		<>
			<Button onClick={handleClick}>{currentLanguage}</Button>
			<div>{currentLanguage === "DE" ? "Arbeitsrecht" : "Labor Law"}</div>
		</>
	);
}

const Button = styled.button`
	background-color: #555;
	color: #fff;
	padding: 5px 10px;
	cursor: pointer;
`;
