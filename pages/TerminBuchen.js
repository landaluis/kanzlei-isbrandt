import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TerminBuchenContent from "@/components/TerminBuchenContent";
import styled from "styled-components";
import { InlineWidget } from "react-calendly";

export default function TerminBuchenPage({ handleClick, currentLanguage }) {
	return (
		<>
			<Header handleClick={handleClick} currentLanguage={currentLanguage} />
			<TerminBuchenContent />
			{/* <div className="inline-widget">
				<InlineWidget url="https://calendly.com/kanzlei-isbrandt" />
			</div> */}
			<Footer currentLanguage={currentLanguage} />
		</>
	);
}
