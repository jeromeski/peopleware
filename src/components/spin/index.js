import { Alert, Spin } from "antd";
import React from "react";

function Spinner() {
	return (
		<Spin tip="Loading..." size="large">
			<Alert message="System is processing your request" description="Please wait..." type="info" />
		</Spin>
	);
}

export default Spinner;
