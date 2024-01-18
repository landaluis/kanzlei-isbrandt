import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styled from "styled-components";
import ImpressumContent from "@/components/ImpressumContent";

export default function Impressum() {
	return (
		<>
			{" "}
			<Header />
			<ImpressumContent />
			<Footer />{" "}
		</>
	);
}
