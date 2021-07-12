import React from "react";
import { Link } from "react-router-dom";
import LogoComponent from "../logo";

function Navbar() {
	return (
		<div className="nav-bar">
			<div className="logo-wrapper">
				<LogoComponent />
			</div>
			<div className="tos-link-wrapper">
				<Link className="tos-link" to="/public/tos">
					Terms of Service
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
