import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export const NavigationBar = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container>
				<Navbar.Brand href="#home">ADMINO</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#login">Log-in</Nav.Link>
						<Nav.Link href="#register">Register</Nav.Link>
						{/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								Another action
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">
								Separated link
							</NavDropdown.Item>
						</NavDropdown> */}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
