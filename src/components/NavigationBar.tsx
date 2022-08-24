import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export const NavigationBar = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container className="px-2">
				<LinkContainer to={"/"}>
					<Navbar.Brand>ADMINO</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<LinkContainer to={"/login"}>
							<Nav.Link>Log-in</Nav.Link>
						</LinkContainer>
						<LinkContainer to={"/register"}>
							<Nav.Link>Register</Nav.Link>
						</LinkContainer>
						<LinkContainer to={"/user"}>
							<Nav.Link>User</Nav.Link>
						</LinkContainer>
						<LinkContainer to={"/Admin"}>
							<Nav.Link>Admin</Nav.Link>
						</LinkContainer>
						{/* <Link to={"/"}>ADMINO</Link>
						<Link to={"/login"}>Log In</Link>
						<Link to={"/register"}>Register</Link> */}
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
