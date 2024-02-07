import Header from "@/components/Header";
import React, { useEffect } from "react";
import ReactGA from "react-ga";
import Footer from "@/components/Footer";
import HomeContent from "@/components/HomeContent";

export default function Home({ handleClick, currentLanguage }) {
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	return (
		<main>
			<Header handleClick={handleClick} currentLanguage={currentLanguage} />
			<HomeContent currentLanguage={currentLanguage} />
			<Footer currentLanguage={currentLanguage} />
		</main>
	);
}
