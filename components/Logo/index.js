import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Watermark from "../../public/Watermark.png";

export default function Logo() {
	return (
		<>
			<Link href="/" style={{ textDecoration: "none" }}>
				<LogoContainer>
					{" "}
					<Image
						src={Watermark}
						alt="KI Logo"
						style={{
							objectFit: "contain",
							width: "100%",
							position: "relative",
							height: "unset",
						}}
					/>
					<LogoText>Kanzlei Isbrandt</LogoText>
				</LogoContainer>
			</Link>
		</>
	);
}
const LogoText = styled.div`
	font-family: Ruluko-Regular, sans-serif;
	display: flex;
	align-items: center;
	text-decoration: none;
	font-size: 1.4rem;
	color: #1a4d61;
`;
const LogoContainer = styled.div`
	width: 100%;
	position: unset !important;
	position: relative;
	width: 90px;
	height: auto;
	display: flex;
	flex-direction: row;

	@media (max-width: 768px) {
		width: 120px;
	}

	@media (max-width: 402px) {
		width: 100px;
	}
`;
