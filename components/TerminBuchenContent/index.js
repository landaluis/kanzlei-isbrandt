import React from "react";
import styled from "styled-components";
import { InlineWidget } from "react-calendly";

export default function TerminBuchenContent() {
	return (
		<>
			<TerminWrapper>
				{/* <div className="inline-widget">
					<InlineWidget url="https://calendly.com/kanzlei-isbrandt" />
				</div> */}

				<div className="inline-widget">
					<InlineWidget
						url="https://calendly.com/kanzlei-isbrandt/60min?primary_color=1a4d61"
						style="min-width:320px;height:700px;"
					/>
				</div>
			</TerminWrapper>
		</>
	);
}

const TerminWrapper = styled.div`
	margin-top: 3rem;
	padding: 4rem;
`;
