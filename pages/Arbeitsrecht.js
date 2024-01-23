import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArbeitsrechtContent from "@/components/ArbeitsrechtContent";

export default function ArbeitsrechtPage({ handleClick, currentLanguage }) {
	return (
		<>
			<Header handleClick={handleClick} currentLanguage={currentLanguage} />
			<ArbeitsrechtContent currentLanguage={currentLanguage} />
			<Footer currentLanguage={currentLanguage} />
		</>
	);
}
