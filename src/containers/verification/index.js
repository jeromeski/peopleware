import React, { useState } from "react";
import { Col, Row, Grid } from "antd";
import { Formik } from "formik";
import { SubmitButton, Form, Input } from "formik-antd";
import { recaptchaKey } from "../../config";
import ReCAPTCHA from "react-google-recaptcha";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { instructions } from "../../data";
// import FormComponent from "../../components/form";
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
	// const [isVerified, setIsVerified] = useState(false);
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
			setCaptchaError("You must verify captcha");
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

		const timeout = setTimeout(() => {
			setLoading(false);
			setToken("");
			history.push("/netcentric/public/jerome-gacoscosim");
			return () => clearTimeout(timeout);
		}, 3000);
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
					{/*<FormComponent
						initialValues={initialValues}
						onSubmit={onSubmit}
						error={captchaError}
						validationSchema={validationSchema}
						xs={xs}
						// setIsVerified={setIsVerified}
						setToken={setToken}
          />*/}
					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={onSubmit}>
						{
							<Form>
								<Row>
									<Col xl={12} lg={20} md={24} sm={24} xs={24}>
										<Form.Item name="id" label="Employee ID:" className="mt-2">
											<Input className="input-id" name="id" placeholder="Enter employee ID" />
										</Form.Item>
									</Col>
								</Row>
								<Row>
									<Col span={`${xs ? 24 : 18}`} offset={`${!xs ? 2 : ""}`}>
										<Row>
											<Col>
												<ReCAPTCHA
													className="mt-1"
													// ref={reCaptcha}
													sitekey={recaptchaKey}
													onChange={(token) => setToken(token)}
													onExpired={(e) => setToken("")}
												/>
												<span className="error-recaptcha">{captchaError}</span>
											</Col>
										</Row>
										<SubmitButton className="mt-3" type="primary" shape="round" size="large">
											Submit
										</SubmitButton>
									</Col>
								</Row>
							</Form>
						}
					</Formik>
					<ModalComponent show={showModal} onCancel={handleCancel} onOk={handleOk} />
				</Col>
			</Row>
		</div>
	);
}

export default VerificationContainer;
