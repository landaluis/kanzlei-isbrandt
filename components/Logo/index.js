import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import LogoKI from "../../public/LogoKI.png";

export default function Logo() {
	return (
		<>
			<Link href="/">
				<LogoContainer>
					{" "}
					<LogoContainer>
						{" "}
						<Image
							src={LogoKI}
							alt="KI Logo"
							style={{
								objectFit: "contain",
								width: "100%",
								position: "relative",
								height: "unset",
							}}
						/>
					</LogoContainer>
				</LogoContainer>
			</Link>
		</>
	);
}

const LogoContainer = styled.div`
	width: 100%;
	position: unset !important;
	position: relative;
	width: 150px;
	height: auto;

	@media (max-width: 768px) {
		width: 120px;
	}

	@media (max-width: 402px) {
		width: 100px;
	}
`;
