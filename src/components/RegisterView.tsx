import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const RegisterView = () => {
	return (
		<Container className="py-5 h-100">
			<Row className="d-flex justify-content-center align-items-center h-100">
				<Col sm={12} md={8} lg={6} xl={5}>
					<Card bg={"dark"} text={"white"} style={{ borderRadius: "1rem" }}>
						<Card.Body className="p-5 text-center">
							<div className="mb-md-5 mt-md-4 pb-5">
								<h2 className="fw-bold mb-2 text-uppercase">Register</h2>
								<p className="text-white-50 mb-5">
									Please enter your register details
								</p>

								<Form>
									<Form.Group className="mb-4">
										<Form.Control type="text" placeholder="Enter First Name" />
										<Form.Label>First Name</Form.Label>
									</Form.Group>

									<Form.Group className="mb-4">
										<Form.Control type="text" placeholder="Enter Last Name" />
										<Form.Label>Last Name</Form.Label>
									</Form.Group>

									<Form.Group className="mb-4">
										<Form.Control type="email" placeholder="Enter email" />
										<Form.Label>Email</Form.Label>
									</Form.Group>

									<Form.Group className="mb-4">
										<Form.Control type="password" placeholder="Password" />
										<Form.Label>Password</Form.Label>
									</Form.Group>

									<Button
										type="submit"
										variant="outline-light"
										size="lg"
										className="px-5"
									>
										Register
									</Button>
								</Form>
							</div>
							<div>
								<p className="mb-0">
									Already have an account?{" "}
									<Link to="/login" className="text-white-50 fw-bold">
										Log In
									</Link>
								</p>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};
