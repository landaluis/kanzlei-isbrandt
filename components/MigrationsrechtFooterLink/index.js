import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function MigrationsrechttLinkFooter() {
	return (
		<>
			<Container>
				<Link href="/Migrationsrecht">
					<Migrationsrecht>
						{" "}
						&nbsp;&nbsp;&gt;&nbsp;&nbsp;Migrationsrecht
					</Migrationsrecht>
				</Link>
			</Container>
		</>
	);
}
const Container = styled.div`
	padding-bottom: 0.4rem;
	width: 14rem;
	border-bottom: 1px solid rgba(122, 131, 135, 0.3);
	text-align: left;
`;
const Migrationsrecht = styled.button`
	background-color: transparent;
	border: none;
	padding: 0;
	margin: 0;
	cursor: pointer;
	font-size: 1.2rem;
	color: #6e757b;
	font-family: Ruluko-Regular, sans-serif;
`;
