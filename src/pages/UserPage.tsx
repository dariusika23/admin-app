import React, { useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";

export const UserPage = () => {
	const [show, setShow] = useState(false);
	const [checked, setChecked] = useState(false);
	const [disabledState, setDisabledState] = useState(null);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const handleChecked = () => {
		setChecked(!checked);
		console.log("checked");
	};

	return (
		<>
			<Container className="py-2">
				<Row>
					<Col>
						<h1>User 1</h1>
						<p>Str. Zorilor, bl. 6, sc. A, ap. 3, et. 2</p>
					</Col>
					<Col>
						<span className="person-number">
							<h2>2 persoane</h2>
						</span>
					</Col>
				</Row>
				<Row>
					<Col>
						<span className="operations">
							<Button variant="primary" onClick={handleShow}>
								Inregistreaza cheltuieli
							</Button>
						</span>
						<Modal show={show} onHide={handleClose}>
							<Modal.Header closeButton>
								<Modal.Title>
									Formular de inregistrare a cheltuielilor
								</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<Form>
									<Form.Group className="mb-3" controlId="formBasicColdWater">
										<Form.Label>Apa rece bucatarie</Form.Label>
										<Form.Control
											type="text"
											placeholder="Introduceti valoarea"
										/>
										<Form.Text className="text-muted">
											Introduceti aici valoarea contorului de la apa rece
											bucatarie.
										</Form.Text>
									</Form.Group>
									<Form.Group className="mb-3" controlId="formBasicHotWater">
										<Form.Label>Apa calda bucatarie</Form.Label>
										<Form.Control
											type="text"
											placeholder="Introduceti valoarea"
										/>
										<Form.Text className="text-muted">
											Introduceti aici valoarea contorului de la apa calda
											bucatarie.
										</Form.Text>
									</Form.Group>

									<Form.Group className="mb-3" controlId="formBasicGas">
										<Form.Label>Gaz</Form.Label>
										<Form.Control
											type="text"
											placeholder="Introduceti valoarea"
										/>
										<Form.Text className="text-muted">
											Introduceti aici valoarea contorului de la gaz daca e
											cazul, daca nu bifati "Nu am gaz!".
										</Form.Text>
									</Form.Group>
									<Form.Group className="mb-3" controlId="formBasicCheckbox">
										<Form.Check
											type="checkbox"
											label="Nu am gaz!"
											onChange={handleChecked}
										/>
									</Form.Group>
									{/* <Button variant="primary" type="submit">
										Submit
									</Button> */}
								</Form>
							</Modal.Body>
							<Modal.Footer>
								<Button variant="secondary" onClick={handleClose}>
									Close
								</Button>
								<Button variant="primary" type="submit" onClick={handleClose}>
									Save Changes
								</Button>
							</Modal.Footer>
						</Modal>
					</Col>
				</Row>
				<Row>
					<Col>
						<h2>SEPTEMBRIE 2022</h2>
					</Col>
				</Row>
				<Row>
					<Col xs={12} md={6}>
						<span className="location">
							<h2>Bucatarie</h2>
						</span>
						<Row>
							<Col xs={6}>
								<span className="hot">
									<h4>Apa calda</h4>
									<p>312 </p>
								</span>
							</Col>
							<Col xs={6}>
								<span className="cold">
									<h4>Apa rece</h4>
									<p>312 </p>
								</span>
							</Col>
						</Row>
					</Col>
					<Col xs={12} md={6}>
						<span className="location">
							<h2>Baie</h2>
						</span>
						<Row>
							<Col xs={6}>
								<span className="hot">
									<h4>Apa calda</h4>
									<p>312 </p>
								</span>
							</Col>
							<Col xs={6}>
								<span className="cold">
									<h4>Apa rece</h4>
									<p>312 </p>
								</span>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row>
					<Col>
						<span className="total-water">
							<h2>Total</h2>
						</span>
					</Col>
				</Row>
				<Row>
					<Col xs={6} md={3}>
						<span className="cold">
							<h4>Apa Rece</h4>
							<p>624</p>
						</span>
					</Col>
					<Col xs={6} md={3}>
						<span className="hot">
							<h4>Apa Calda</h4>
							<p>624</p>
						</span>
					</Col>
				</Row>
				<Row>
					<Col>
						<span className="gas">
							<h2>Gaz</h2>
							<p>100</p>
						</span>
					</Col>
				</Row>
				<Row>
					<Col>
						<span className="other">
							<h2>Alte Cheltuieli</h2>
						</span>
					</Col>
				</Row>
				<Row>
					<Col>
						<span className="other-single">
							<h4>Salar femeie de serviciu</h4>
							<p>16</p>
						</span>
					</Col>
					<Col>
						<span className="other-single">
							<h4>Gard Viu</h4>
							<p>10</p>
						</span>
					</Col>
					<Col>
						<span className="other-single">
							<h4>Salubritate</h4>
							<p>10</p>
						</span>
					</Col>
				</Row>
				<Row>
					<Col>
						<span className="penal">
							<h2>Restante</h2>
							<p>0</p>
						</span>
					</Col>
				</Row>
				<Row>
					<Col>
						<span className="total">
							<h2>Total</h2>
							<p>123123</p>
						</span>
					</Col>
				</Row>
			</Container>
		</>
	);
};
