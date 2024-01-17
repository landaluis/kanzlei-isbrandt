import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styled from "styled-components";

export default function Home() {
	return (
		<main>
			<Header />
			<EmptyDiv></EmptyDiv>
			<Footer />
		</main>
	);
}

const EmptyDiv = styled.div`
	height: 500px;
`;
