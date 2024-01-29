import React from "react";
import styled from "styled-components";

export default function TerminBuchenContent() {
	return (
		<>
			<TerminWrapper>
				<iframe
					src="https://outlook.office.com/bookwithme/user/e10427a8c9b2439d9095769d6ff65cba%40kanzleiisbrandt.onmicrosoft.com/meetingtype/t7gTVrb_70eSCOWXqWWNQg2?anonymous&isanonymous=true"
					width="100%"
					height="100%"
					style={{
						border: 0,
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

	@media (max-width: 320px) {
		margin-top: 8.5rem;
		padding: 0.5rem;
	}
`;
