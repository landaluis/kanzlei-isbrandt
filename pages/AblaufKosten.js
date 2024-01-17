import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styled from "styled-components";
import AblaufKostenContent from "@/components/AblaufKostenContent";

export default function AblaufKostenPage() {
	return (
		<>
			<Header />
			<AblaufKostenContent />
			<Footer />
		</>
	);
}
