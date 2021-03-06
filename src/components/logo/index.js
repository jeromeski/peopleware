import { Button } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function LogoComponent() {
	const history = useHistory();
	const handleClick = () => {
		history.push("/netcentric/public/verification");
	};

	return (
		<div className="logo-wrapper">
			<Button type="link" onClick={() => handleClick()}>
				<img className="logo" src={logo} alt="logo" />
			</Button>
		</div>
	);
}

export default LogoComponent;
