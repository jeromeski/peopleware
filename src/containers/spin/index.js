import { Col, Row } from "antd";
import React from "react";
import Spinner from "../../components/spin";

function SpinContainer() {
	return (
		<Row style={{ height: "90vh", width: "100vw" }} justify="center" align="middle">
			<Col>
				<Spinner />
			</Col>
		</Row>
	);
}

export default SpinContainer;
