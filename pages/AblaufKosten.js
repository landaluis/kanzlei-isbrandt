import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AblaufKostenContent from "@/components/AblaufKostenContent";

export default function AblaufKostenPage({ handleClick, currentLanguage }) {
	return (
		<>
			<Header handleClick={handleClick} currentLanguage={currentLanguage} />
			<AblaufKostenContent />
			<Footer />
		</>
	);
}
