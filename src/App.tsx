import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { SignInView } from "./components/SignInView";
import { NavigationBar } from "./components/NavigationBar";

function App() {
	return (
		<>
			<NavigationBar />
			<div className="content">
				<SignInView />
			</div>
		</>
	);
}

export default App;
