import React from "react";
import styled from "styled-components";

export default function TerminBuchenContent() {
	return (
		<>
			<TerminWrapper>
				<iframe
					src="https://outlook.office.com/bookwithme/user/e10427a8c9b2439d9095769d6ff65cba@kanzleiisbrandt.onmicrosoft.com/meetingtype/iwaPqNpECkOZcqbXYeb5qQ2?anonymous&ep=mLinkFromTile"
					style={{
						border: 0,
						height: "100%",
						width: "100%",
						minHeight: "1000px",
						overflow: "hidden",
					}}></iframe>
			</TerminWrapper>
		</>
	);
}

const TerminWrapper = styled.div`
	margin-top: 3rem;
	padding: 4rem;
	@media (max-width: 1024px) {
		margin-top: 5rem;
	}

	@media (max-width: 800px) {
		margin-top: 7rem;
	}
	@media (max-width: 700px) {
		margin-top: 8rem;
	}
	@media (max-width: 450px) {
		margin-top: 8.5rem;
		padding: 0.5rem;
	}

	@media (max-width: 320px) {
		margin-top: 8.5rem;
		padding: 0rem;
	}
`;
