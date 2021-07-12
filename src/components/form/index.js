import React from "react";
import { Col, Row } from "antd";
import { Formik } from "formik";
import { SubmitButton, Form, Input } from "formik-antd";
import Recaptcha from "react-recaptcha";
import { recaptchaKey } from "../../config";

function FormComponent({ initialValues, validationSchema, onSubmit, setIsVerified, error, xs }) {
	const onLoadCallback = () => {
		console.log("Recaptcha has loaded successfully!");
	};

	const onVerify = (response) => {
		if (response) setIsVerified(true);
	};

	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
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
									<Recaptcha
										sitekey={recaptchaKey}
										render="explicit"
										onloadCallback={onLoadCallback}
										verifyCallback={onVerify}
									/>
									<span className="error-recaptcha">{error}</span>
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
	);
}

export default FormComponent;
