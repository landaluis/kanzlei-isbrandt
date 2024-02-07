import React from "react";
import ReactGA from "react-ga";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UbermichContent from "@/components/UbermichContent";

export default function UbermichPage({ handleClick, currentLanguage }) {
	ReactGA.pageview(window.location.pathname + window.location.search);
	return (
		<>
			<Header handleClick={handleClick} currentLanguage={currentLanguage} />
			<UbermichContent currentLanguage={currentLanguage} />
			<Footer currentLanguage={currentLanguage} />
		</>
	);
}
