import React from "react";
import ReactGA from "react-ga";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArbeitsrechtContent from "@/components/ArbeitsrechtContent";
import { useEffect } from "react";

export default function ArbeitsrechtPage({ handleClick, currentLanguage }) {
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);
	return (
		<>
			<Header handleClick={handleClick} currentLanguage={currentLanguage} />
			<ArbeitsrechtContent currentLanguage={currentLanguage} />
			<Footer currentLanguage={currentLanguage} />
		</>
	);
}
