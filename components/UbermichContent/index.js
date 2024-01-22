import React from "react";
import styled from "styled-components";
import Watermark from "../../public/Watermark.png";
import Image from "next/image";

export default function UbermichContent() {
	return (
		<>
			{/* <UbermichTitle>Uber mich</UbermichTitle> */}
			<ContentBox>
				<Title>Über mich</Title>
				<SectionContent>
					<ContentWrapper>
						<Content>
							<p>
								Nach meiner Schullaufbahn studierte ich Rechtswissenschaften an
								der Universität Bielefeld. Bereits dort legte ich meinen
								Schwerpunkt auf das Migrationsrecht und belegte den Schwerpunkt
								"Einwanderung und soziale Integration".
							</p>

							<p>
								Nach dem Ersten Staatsexamen absolvierte ich das Referendariat
								am Landgericht Bielefeld, wobei ich auch hier dem
								Migrationsrecht Priorität einräumte und meine Anwalts- sowie
								Wahlstation in einer auf Migrationsrecht spezialisierten Kanzlei
								absolvierte.
							</p>

							<p>
								Nach meinem Zweiten Staatsexamen und der Zulassung zur
								Anwaltschaft habe ich zunächst zweieinhalb Jahre als angestellte
								Rechtsanwältin in einer renommierten Kanzlei für Migrations- und
								Sozialrecht in Bielefeld gearbeitet.
							</p>

							<p>
								Meine Rechtsanwaltskanzlei wurde im Jahr 2024 gegründet. In
								meiner Kanzlei biete ich neben dem Rechtsgebiet Migrationsrecht
								auch das Rechtsgebiet Arbeitsrecht an.
							</p>
						</Content>
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
			</ContentBox>
		</>
	);
}
const Content1Title = styled.h1``;

const Content = styled.div`
	font-size: 1.2rem;
	margin-top: 2rem;
	color: #333;
	line-height: 1.5;
	text-align: justify;
`;

// const ContentWrapper = styled.div`
// 	max-width: 800px;
// 	display: flex;
// 	margin-left: auto;
// 	margin-right: auto;
// 	display: flex;
// 	flex-direction: column;
// `;

const SectionContent = styled.div`
	position: relative;
	width: 100%;
`;

const ContentBox = styled.div`
	// border: 1px solid;
	// color: #1a4d61;
	padding: 2rem;
	border-radius: 10px;
	background-color: rgba(26, 77, 97, 0.2);
	margin-bottom: 4rem;
	margin-top: 7rem;
`;

const ImageContainer = styled.div`
	position: absolute;
	top: -7rem;
	left: 49rem;
	opacity: 0.2;
	pointer-events: none;
	z-index: 2;
	height: 30rem;
	width: auto;
`;
// const Content1Title = styled.h1`
// 	color: #1a4d61;
// 	font-size: 2.5rem;
// `;

// const Content = styled.div`
// 	font-size: 1.2rem;
// 	margin-top: 2rem;
// 	color: #333;
// 	line-height: 1.5;
// 	text-align: justify;
// `;

const ContentWrapper = styled.div`
	max-width: 800px;
	display: flex;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 0rem;
	display: flex;
	flex-direction: column;
`;

// const SectionContent = styled.div`
// 	position: relative;
// 	width: 100%;
// `;

const Title = styled.h1`
	font-size: 2.5rem;
	color: #1a4d61;
	padding: 10px;
	text-align: center;
	margin-top: 0rem;
	margin-bottom: 0;
`;
