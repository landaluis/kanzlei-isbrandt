import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { InlineWidget } from "react-calendly";

export default function TerminBuchenContent({ currentLanguage }) {
	return (
		<>
			<TerminWrapper>
				{/* <div className="inline-widget">
					<InlineWidget url="https://calendly.com/kanzlei-isbrandt" />
				</div> */}

				<div className="inline-widget">
					<InlineWidget
						url="https://calendly.com/kanzlei-isbrandt/60min?primary_color=1a4d61"
						style="min-width:320px;height:1700px;"
					/>
				</div>

				{/* <iframe
					src="https://outlook.office.com/bookwithme/user/e10427a8c9b2439d9095769d6ff65cba@kanzleiisbrandt.onmicrosoft.com/meetingtype/t7gTVrb_70eSCOWXqWWNQg2?anonymous&ep=mlink"
					width="100%"
					height="100%"
					// scrolling="yes"
					style={{ border: 0, minHeight: "800px" }}></iframe> */}
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

// src =
// 	"https://outlook.office365.com/owa/calendar/cba@kanzleiisbrandt.onmicrosoft.com/bookings/";

// src =
// 	"https://outlook.office.com/bookwithme/user/e10427a8c9b2439d9095769d6ff65cba@kanzleiisbrandt.onmicrosoft.com/meetingtype/t7gTVrb_70eSCOWXqWWNQg2?anonymous&ep=mlink";
