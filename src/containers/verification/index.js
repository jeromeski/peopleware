import React, { useState } from "react";
import { Col, Row } from "antd";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { submitWithCaptcha } from "../api";
import SpinContainer from "../containers/spin";
import { instructions } from "../data";
import FormComponent from "../../components/form";
import ModalComponent from "../../components/modal";
import Grid from "antd/lib/card/Grid";

const initialValues = {
	id: ""
};

const validationSchema = Yup.object({
	id: Yup.string()
		.required("This field is required")
		.matches(/^[0-9]+$/, "Must be only digits")
		.min(6, "Wrong ID Format")
		.max(6, "Wrong ID Format")
});

function VerificationContainer() {
	const [loading, setLoading] = useState(false);
	const [showModal, setIsModalVisible] = useState(false);
	const [error, setError] = useState("");
	const [token, setToken] = useState("");

	const history = useHistory();

	const handleOk = () => {
		setIsModalVisible(false);
	};
	const handleCancel = () => {
		setIsModalVisible(false);
	};

	const onSubmit = (values) => {
		setLoading(true);

		if (!token) {
			setLoading(false);
			setError("You must verify captcha");
			return;
		}

		if (values.id !== "491342") {
			const timeout = setTimeout(() => {
				setLoading(false);
				setIsModalVisible(true);
				return () => clearTimeout(timeout);
			}, 3000);
			return;
		}

		submitWithCaptcha(token)
			.then((res) => {
				// reCaptcha.current.reset();
				setLoading(false);
				setToken("");
				history.push("/netcentric/public/jerome-gacoscosim");
			})
			.catch(({ res }) => {
				setLoading(false);
				setError(res);
			});
	};

	const { useBreakpoint } = Grid;
	const screens = useBreakpoint();
	const { xs } = screens;

	const props = {
		initialValues,
		onSubmit,
		error,
		validationSchema,
		xs
	};

	if (loading) return <SpinContainer />;

	return (
		<div className="content">
			<Row align="middle">
				<Col span={`${xs ? 24 : 18}`} offset={`${!xs ? 3 : ""}`}>
					<p>{instructions}</p>
					<FormComponent {...props} />
					<ModalComponent show={showModal} onCancel={handleCancel} onOk={handleOk} />
				</Col>
			</Row>
		</div>
	);
}

export default VerificationContainer;
