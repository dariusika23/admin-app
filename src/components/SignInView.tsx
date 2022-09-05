import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { User } from "./User";

export const SignInView = () => {
	const [user, setUser] = useState<User>({});

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	const person: User = { email, password };
	// };

	return (
		<Container className="py-5 h-100">
			<Row className="d-flex justify-content-center align-items-center h-100">
				<Col sm={12} md={8} lg={6} xl={5}>
					<Card bg={"dark"} text={"white"} style={{ borderRadius: "1rem" }}>
						<Card.Body className="p-5 text-center">
							<div className="mb-md-5 mt-md-4 pb-5">
								<h2 className="fw-bold mb-2 text-uppercase">Login</h2>
								<p className="text-white-50 mb-5">
									Please enter your login and password!
								</p>

								<Form>
									<Form.Group className="mb-4">
										<Form.Control
											required
											type="email"
											placeholder="Enter email"
											value={user.email}
										/>
										<Form.Label>Email</Form.Label>
									</Form.Group>

									<Form.Group className="mb-4">
										<Form.Control
											required
											type="password"
											placeholder="Password"
											value={user.password}
										/>
										<Form.Label>Password</Form.Label>
									</Form.Group>
									<p className="small mb-5 pb-lg-2">
										<a className="text-white-50" href="#!">
											Forgot password?
										</a>
									</p>
									<Button
										type="submit"
										variant="outline-light"
										size="lg"
										className="px-5"
									>
										Login
									</Button>
								</Form>
							</div>
							<div>
								<p className="mb-0">
									Don't have an account?{" "}
									<Link to="/register" className="text-white-50 fw-bold">
										Sign Up
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
