import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Watermark from "../../public/Watermark.webp";
import Map from "../../public/Map.avif";

export default function KontaktContent({ currentLanguage }) {
	return (
		<>
			{" "}
			<KontaktContainer>
				<KontakTitle currentLanguage={currentLanguage}>
					{currentLanguage === "DE" ? "Kontakt" : "Contact"}
				</KontakTitle>
				<Row>
					<KontaktMap>
						<Section1>
							<Image
								src={Map}
								alt="KI Logo"
								style={{
									height: "100%",
									width: "100%",
								}}
							/>
						</Section1>
						<Section2>
							<p>
								{currentLanguage === "DE"
									? "Bürogemeinschaft Friedrichstraße"
									: "Shared office Friedrichstraße"}
							</p>
							<p>
								Kanzlei Isbrandt
								<br />
								Friedrichstraße 24
								<br />
								33615 Bielefeld{" "}
							</p>
							<p>
								E-Mail: info@kanzlei-isbrandt.de <br />
								Tel: 0521 44813645
								<br />
								Fax: 0521 44813646{" "}
							</p>
						</Section2>
					</KontaktMap>

					<RightSide>
						<Directions>
							<TitleH2>
								{currentLanguage === "DE"
									? "Bürogemeinschaft Friedrichstraße"
									: "Shared office Friedrichstraße"}
							</TitleH2>
							<TitleH3>
								{currentLanguage === "DE"
									? "Anreise mit dem Auto"
									: "Getting There by Car"}
							</TitleH3>
							<p>
								{currentLanguage === "DE"
									? "Wenn Sie mit dem Auto anreisen, empfehle ich genügend Zeit für die Suche eines Parkplatzes einzuplanen. Alternativ können Sie auch die Parkhäuser am Hauptbahnhof oder Zentrum nutzen. Diese sind wenige Gehminuten von der Kanzlei entfernt."
									: " If you're arriving by car, I recommend allocating enough time to find parking. Alternatively, you can use the parking garages at the main station or in the city center, which are just a short walk from the law firm."}
							</p>
							<TitleH3>
								{currentLanguage === "DE"
									? "Anreise mit Bus und Bahn"
									: "Getting There by Bus and Train"}
							</TitleH3>

							<p>
								{currentLanguage === "DE"
									? "Vom Hauptbahnhof gelangen Sie mit der Stadtbahn der Linie 4 (Richtung Universität) zur Haltestelle Siegfriedplatz. Von dort aus sind es weniger als 150 m bis zur Kanzlei."
									: "From the main station, take tram line 4 (towards University) to the Siegfriedplatz stop. From there, it's less than 150 meters to the law firm."}
							</p>
							<TitleH3>
								{" "}
								{currentLanguage === "DE"
									? "Barrierefreiheit"
									: "Accessibility"}
							</TitleH3>

							<p>
								{currentLanguage === "DE"
									? "Meine Kanzlei befindet sich im ersten Stock und ist über eine Treppe zugänglich. Ein Aufzug steht leider nicht zur Verfügung. Falls Sie auf eine barrierearme Umgebung angewiesen sind, bitte ich Sie, dies bereits in Ihrer Kontaktanfrage anzugeben. Es besteht selbstverständlich die Möglichkeit, dass unser Beratungsgespräch an einem barrierearmen Ort stattfindet. In diesem Fall werde ich mich um alle weiteren organisatorischen Details kümmern."
									: "My law firm is located on the first floor and is accessible by stairs. Unfortunately, there is no elevator available. If you require an environment with reduced barriers, please indicate this in your initial contact request. Of course, it is possible for our consultation to take place in a barrier-free location. In that case, I will take care of all further organizational details."}
							</p>
						</Directions>
						<Offnung>
							<TitleH3>
								{currentLanguage === "DE" ? "Öffnungszeiten" : "Opening hours"}
							</TitleH3>
							<TimeContainer1>
								<Day>
									{" "}
									{currentLanguage === "DE" ? "Montag" : "Monday"} &ndash;{" "}
									{currentLanguage === "DE" ? "Donnerstag" : "Thursday"}
								</Day>
								<Hour>
									08:30 &ndash; 17:30{" "}
									{currentLanguage === "DE" ? "Uhr" : "Hrs."}
								</Hour>
							</TimeContainer1>
							<TimeContainer2>
								<Day>{currentLanguage === "DE" ? "Freitags" : "Freitags"} </Day>
								<Hour>
									08:30 &ndash; 13:00{" "}
									{currentLanguage === "DE" ? "Uhr" : "Hrs."}
								</Hour>
							</TimeContainer2>

							<h3>
								{currentLanguage === "DE"
									? "Termine nur nach Vereinbarung!"
									: "Appointments only by arrangement!"}
							</h3>
						</Offnung>
					</RightSide>
				</Row>

				<ImageContainer>
					<Image
						src={Watermark}
						alt="KI Logo"
						style={{
							height: "auto",
							width: "20rem",
						}}
					/>
				</ImageContainer>
			</KontaktContainer>
		</>
	);
}
const TimeContainer1 = styled.div`
	display: flex;
	justify-content: space-between;
	width: auto;
	flex-direction: row;
	margin-bottom: 1rem;

	@media (max-width: 320px) {
		flex-direction: column;
		align-items: center;
	}
`;
const TimeContainer2 = styled.div`
	display: flex;
	justify-content: space-between;
	width: auto;
	flex-direction: row;

	@media (max-width: 320px) {
		flex-direction: column;
		align-items: center;
	}
`;

const Day = styled.p`
	display: flex;
	text-align: left;
	margin: 0;
`;

const Hour = styled.p`
	display: flex;
	text-align: right;
	margin: 0;
`;
const TitleH2 = styled.h2`
	color: #1a4d61;
	font-family: "Ruluko-Regular";
`;
const TitleH3 = styled.h3`
	color: #1a4d61;
	font-family: "Ruluko-Regular";
`;
const Row = styled.div`
	display: flex;
	flex-direction: row;

	@media (max-width: 960px) {
		flex-direction: column;
		align-items: center;
	}
`;
const Directions = styled.div`
	font-family: "FiraSans-Regular";
`;
const Offnung = styled.div`
	font-family: "FiraSans-Regular";
`;
const RightSide = styled.div`
	color: #111827;
	margin-left: 5rem;
	line-height: 1.5;
	@media (max-width: 960px) {
		margin-left: 0;
	}

	@media (max-width: 320px) {
		margin-left: 1rem;
	}
`;

const Section1 = styled.div`
	width: 20rem;
	padding: none;

	@media (max-width: 320px) {
		width: 15rem;
	}
`;
const Section2 = styled.div`
	padding: 1rem 2rem 1rem;
`;

const KontaktMap = styled.div`
	color: #111827;
	flex-direction: column;
	display: flex;
	position: relative;
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
	width: 20rem;
	height: 31rem;
	margin-top: 3rem;
	font-family: "FiraSans-Regular";
	line-height: 1.5;

	@media (max-width: 9600px) {
		margin-bottom: 3rem;
	}
	@media (max-width: 320px) {
		width: 15rem;
	}
`;

const ImageContainer = styled.div`
	position: absolute;
	top: 10rem;
	left: 55rem;
	opacity: 0.2;
	pointer-events: none;
	z-index: 2;
	height: 30rem;
	width: auto;

	@media (max-width: 1350px) {
		left: 50rem;
	}

	@media (max-width: 1200px) {
		left: 45rem;
	}
	@media (max-width: 1100px) {
		left: 40rem;
		top: 12rem;
	}

	@media (max-width: 960px) {
		top: 52rem;
		left: 30rem;
	}

	@media (max-width: 850px) {
		left: 25rem;
	}
	@media (max-width: 750px) {
		left: 20rem;
	}

	@media (max-width: 650px) {
		left: 15rem;
		top: 53rem;
	}
	@media (max-width: 500px) {
		left: 10rem;
	}

	@media (max-width: 425px) {
		height: 20rem;
		width: auto;
		left: 5rem;
		top: 55rem;
	}
`;

const KontaktContainer = styled.div`
	padding-top: 130px;
	color: #7a8387;
	overflow: hidden;
	padding: 8rem 15rem 4rem;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: #7a8387;

	@media (max-width: 1350px) {
		padding: 8rem 10rem 4rem;
	}

	@media (max-width: 1200px) {
		padding: 8rem 8rem 4rem;
	}

	@media (max-width: 1100px) {
		padding: 8rem 6rem 4rem;
	}

	@media (max-width: 800px) {
		margin-top: 3rem;
		padding: 8rem 6rem 4rem;
	}

	@media (max-width: 600px) {
		padding: 8rem 3rem 4rem;
	}

	@media (max-width: 400px) {
		padding: 8rem 1rem 4rem;
		margin-top: 0rem;
	}
`;

const KontakTitle = styled.h1`
	font-size: 3rem;
	color: #1a4d61;
	margin-bottom: 1rem;

	@media (max-width: 9600px) {
		align-self: center;
	}
`;
