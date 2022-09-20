import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import { loadAllApartments } from "../api/Backend";

interface Apartment {
	id?: number;
	blockid?: number;
    userid?: number;
    name?: string;
    personumber?: number;
    hotwater1?: number;
    hotwater2?: number;
    coldwater1?: number;
    coldwater2?: number;
    electricity?: number;
    trash?: number;
    adminsalary?: number;
    subscriptions?: number;
    intercom?: number;
    misc?: number;
    repairs?: number;
    totalmonth?: number;
	remaining?: number;
    penalties?: number;
    total?: number
}

// TO-DO: loop through entries, show the same template using state and the same method

export const AdminPage = () => {
	const [apartments, setApartments] = useState<Apartment[]>([]);
	const { token } = useTokenState();

	useEffect(() => {
		async function load() {
			const res = await loadAllApartments(token);
			if (res.ok) {
				setApartments(await res.json());
			}
		}

		load();
	}, [token]);

	const apartmentsView = apartments.map(ap => {
		return <tr key={ap.id}>
			<td>{ap.id}</td>
			<td>{ap.name}</td>
			<td>{ap.personumber}</td>
			<td>{ap.name}</td>
			<td>{ap.name}</td>
		</tr>
	})
	return (
		<>
			<Container className="py-2">
				{/* Admin Page */}
				<Table striped bordered hover>
					<thead>
						<tr>
						<th>Nr. Ap</th>
						<th>Nume Proprietar</th>
						<th>Nr. Persoane</th>
						<th colSpan={2}>Apa Calda</th>									
						<th colSpan={2}>Apa Rece</th>
						<th>Curent</th>
						<th>Salubritate</th>
						<th>Administrator</th>
						<th>Abonament instalatii</th>
						<th>Abonament interfon</th>
						<th>Cheltuieli / apartament</th>
						<th>Fond contoare de apa</th>
						<th>Fond de reparatii</th>
						<th>Total cheltuieli luna</th>
						<th>Restante</th>
						<th colSpan={2}>Penalizari</th>
						<th>Total</th>
						<th>Nr. Ap.</th>
						</tr>
						
					</thead>
					<tbody>
						<tr>
						<td>1</td>
						<td>Mark Otto</td>
						<td>1</td>
						<td>21</td>
						<td>213</td>
						<td>213</td>
						<td>213</td>
						<td>211321</td>
						<td>2113</td>
						<td>22323</td>
						<td>22413</td>
						<td>1413</td>
						<td>13</td>
						<td>10</td>
						<td>10</td>
						<td>1036</td>
						<td>103656</td>
						<td>56</td>
						<td>5</td>
						<td>5</td>
						<td>1</td>
						</tr>
						<tr>
						<td>2</td>
						<td>Mark Blanks</td>
						<td>1</td>
						<td>21</td>
						<td>213</td>
						<td>213</td>
						<td>213</td>
						<td>211321</td>
						<td>2113</td>
						<td>22323</td>
						<td>22413</td>
						<td>1413</td>
						<td>13</td>
						<td>10</td>
						<td>10</td>
						<td>1036</td>
						<td>103656</td>
						<td>56</td>
						<td>5</td>
						<td>5</td>
						<td>2</td>
						</tr>
						<tr>

						</tr>
					</tbody>
				</Table>
			</Container>
		</>
	);
};
