import React from "react";
import styled from "styled-components";

export default function UbermichContent() {
	return (
		<>
			<UbermichTitle>Uber mich</UbermichTitle>
			<SectionContent>
				<ContentWrapper>
					<Content>
						<Content1Title>U@ber mich</Content1Title>
					</Content>
				</ContentWrapper>
			</SectionContent>
		</>
	);
}
const Content1Title = styled.h1``;

const Content = styled.div`
	font-size: 15px;
	margin-top: 2rem;
	color: #333;
	line-height: 1.5;
`;

const ContentWrapper = styled.div`
	max-width: 800px;
	display: flex;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	flex-direction: column;
`;

const SectionContent = styled.div`
	position: relative;
	width: 100%;
`;

const UbermichTitle = styled.h1`
	width: 100%;
	background-color: darkgray;
	font-size: 1.7rem;
	line-height: 4;
	padding: 10px;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
	margin-top: 6rem;
	border-bottom: 1px solid black;
`;
