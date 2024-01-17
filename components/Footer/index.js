import React from "react";
import styled from "styled-components";
import ImpressumLink from "../ImpressumLink";

export default function Footer() {
	return (
		<>
			<FooterContainer>
				<List1>
					<ListItem>Tel: 02381/985000</ListItem>
					<ListItem>Fax: 02381/985050</ListItem>
					<ListItem>Email: info@rak-hamm.de</ListItem>
				</List1>
				<List2>
					{" "}
					<ListItem>Migrationsrecht</ListItem>
					<ListItem>Arbeitsrecht</ListItem>
					<ListItem>
						<ImpressumLink />
					</ListItem>
				</List2>
			</FooterContainer>
		</>
	);
}

const FooterContainer = styled.div`
	background-color: #08181f;

	display: flex;
	padding: 0.8rem;
	padding-top: 2rem;
	padding-bottom: 2rem;
	text-align: center;
	bottom: 0;
	width: 100%;
	min-height: auto;
`;

const List = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
`;

const List1 = styled(List)`
	padding-left: 2rem;
`;

const List2 = styled(List)`
	padding-left: 18rem;
`;

const ListItem = styled.li`
	margin-right: 20px;
	margin-bottom: 2rem;
	color: #7a8387;
`;
