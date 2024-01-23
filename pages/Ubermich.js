import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UbermichContent from "@/components/UbermichContent";

export default function UbermichPage({ handleClick, currentLanguage }) {
	return (
		<>
			<Header handleClick={handleClick} currentLanguage={currentLanguage} />
			<UbermichContent currentLanguage={currentLanguage} />
			<Footer currentLanguage={currentLanguage} />
		</>
	);
}
