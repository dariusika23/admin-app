import React from "react";
import Container from "react-bootstrap/esm/Container";

export const ErrorPage = () => {
	return (
		<>
			<Container className="py-2">
				<h1>
					ERROR! <br />
					404 not found. Try again!
				</h1>
			</Container>
		</>
	);
};
