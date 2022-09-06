import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { SignInView } from "./components/SignInView";
import { NavigationBar } from "./components/NavigationBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AdminPage } from "./pages/AdminPage";
import { UserPage } from "./pages/UserPage";
import { RegisterView } from "./components/RegisterView";
import { ErrorPage } from "./pages/ErrorPage";

function App() {
	return (
		<>
			<BrowserRouter>
				<NavigationBar />
				<div className="content">
					<Routes>
						<Route path="/" element={<HomePage />} />
						{/* <Route path="/login" element={<SignInView />} />
						<Route path="/register" element={<RegisterView />} /> */}
						<Route path="/admin" element={<AdminPage />} />
						<Route path="/user" element={<UserPage />} />
						<Route path="/*" element={<ErrorPage />} />
					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
