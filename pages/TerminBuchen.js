import React from "react";
import ReactGA from "react-ga";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TerminBuchenContent from "@/components/TerminBuchenContent";

export default function TerminBuchenPage({ handleClick, currentLanguage }) {
	ReactGA.pageview(window.location.pathname + window.location.search);
	return (
		<>
			<Header handleClick={handleClick} currentLanguage={currentLanguage} />
			<TerminBuchenContent currentLanguage={currentLanguage} />

			<Footer currentLanguage={currentLanguage} />
		</>
	);
}
