import React from "react";
import ReactGA from "react-ga";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RechtsgebieteContent from "@/components/RechtsgebieteContent";
import { useEffect } from "react";

export default function RechtsgebietePage() {
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);
	return (
		<>
			<Header />
			<RechtsgebieteContent />
			<Footer />
		</>
	);
}
