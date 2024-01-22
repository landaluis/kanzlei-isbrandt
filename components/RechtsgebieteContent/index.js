import React from "react";
import styled from "styled-components";
import ArbeitsrechtContent from "../ArbeitsrechtContent";
import MigrationsrechtContent from "../MigrationsrechtContent";
import Watermark from "../../public/Watermark.png";
import Image from "next/image";

export default function RechtsgebieteContent() {
	return (
		<>
			<Title>Rechtsgebiete</Title>
			<SectionContent>
				<ContentWrapper>
					<ArbeitsrechtContent />
					<MigrationsrechtContent />
				</ContentWrapper>
				<ImageContainer>
					<Image
						src={Watermark}
						alt="KI Logo"
						style={{
							height: "100%",
							width: "auto",
						}}
					/>
				</ImageContainer>
			</SectionContent>
		</>
	);
}

const ImageContainer = styled.div`
	position: absolute;
	top: 0rem;
	left: 49rem;
	opacity: 0.2;
	pointer-events: none;
	z-index: 2;
	height: 30rem;
	width: auto;
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

const Title = styled.h1`
	font-size: 3rem;
	color: #1a4d61;
	padding: 10px;
	text-align: center;
	margin-top: 9rem;
	margin-bottom: 2rem;
`;
