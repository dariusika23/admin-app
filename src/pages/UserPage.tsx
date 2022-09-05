import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const UserPage = () => {
	return (
		<>
			<Container className="py-2">
				<Row>
					<Col>
						<h1>User 1</h1>
						<p>Str. Zorilor, bl. 6, sc. A, ap. 3, et. 2</p>
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
			</Container>
		</>
	);
};
