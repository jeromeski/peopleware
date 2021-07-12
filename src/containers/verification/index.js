import React, { useState } from "react";
import { Col, Row, Grid } from "antd";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { instructions } from "../../data";
import FormComponent from "../../components/form";
import ModalComponent from "../../components/modal";
import SpinContainer from "../spin";

const initialValues = {
	id: ""
};

const errorFormat = "The format you entered is not valid.";

const validationSchema = Yup.object({
	id: Yup.string()
		.required("This field is required")
		.matches(/^[0-9]+$/, errorFormat)
		.min(6, errorFormat)
		.max(6, errorFormat)
});

function VerificationContainer() {
	const [loading, setLoading] = useState(false);
	const [showModal, setIsModalVisible] = useState(false);
	const [captchaError, setCaptchaError] = useState("");
	const [isVerified, setIsVerified] = useState(false);

	const history = useHistory();

	const handleOk = () => {
		setIsModalVisible(false);
	};
	const handleCancel = () => {
		setIsModalVisible(false);
	};

	const onSubmit = (values) => {
		setLoading(true);

		if (values.id !== "491342") {
			const timeout = setTimeout(() => {
				setLoading(false);
				setIsModalVisible(true);
				return () => clearTimeout(timeout);
			}, 3000);
			return;
		}

		if (isVerified) {
			setLoading(false);
			history.push("/netcentric/public/jerome-gacoscosim");
		} else {
			setLoading(false);
			setCaptchaError("Invalid Captcha.");
		}
	};

	const { useBreakpoint } = Grid;
	const screens = useBreakpoint();
	const { xs } = screens;

	if (loading) return <SpinContainer />;

	return (
		<div className="content">
			<Row align="middle">
				<Col span={`${xs ? 24 : 18}`} offset={`${!xs ? 3 : ""}`}>
					<p>{instructions}</p>
					<FormComponent
						initialValues={initialValues}
						onSubmit={onSubmit}
						error={captchaError}
						validationSchema={validationSchema}
						xs={xs}
						setIsVerified={setIsVerified}
					/>
					<ModalComponent show={showModal} onCancel={handleCancel} onOk={handleOk} />
				</Col>
			</Row>
		</div>
	);
}

export default VerificationContainer;
