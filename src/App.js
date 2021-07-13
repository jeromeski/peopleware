import "antd/dist/antd.css";
import "./styles.css";
import { BrowserRouter, Redirect, Route } from "react-router-dom";

import DetailsPage from "./pages/details";
import TosPage from "./pages/tos";
import HeaderComponent from "./layout/header";
import LandingPage from "./pages/landing";

export default function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<HeaderComponent />
				<Route path="/">{<Redirect to="/netcentric/public/verification" />}</Route>
				<Route exact path="/netcentric/public/verification" component={LandingPage} />

				<Route exact path="/netcentric/internal/jerome-gacoscosim" component={DetailsPage} />

				<Route exact path="/public/tos" component={TosPage} />
			</BrowserRouter>
		</div>
	);
}
