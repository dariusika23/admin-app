import React from "react";
import Container from "react-bootstrap/esm/Container";
import { NavigationBar } from "../components/NavigationBar";

export const AdminPage = () => {
	return (
		<>
			<NavigationBar />
			<Container className="py-2">
				<h1>ADMIN</h1>
			</Container>
		</>
	);
};
