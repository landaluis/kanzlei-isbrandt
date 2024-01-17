import React from "react";
import styled from "styled-components";

export default function StandardContainer() {
	return (
		<>
			<Margin></Margin>
		</>
	);
}

const Margin = styled.div`
	width: 100%;

	padding: 0 3rem 4rem;
	position: relative;
	align-items: center;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
`;
