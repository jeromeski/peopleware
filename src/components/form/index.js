import React, { useRef } from "react";
import { Col, Row } from "antd";
import { Formik } from "formik";
import { SubmitButton, Form, Input } from "formik-antd";
import { recaptchaKey } from "../../config";
import ReCAPTCHA from "react-google-recaptcha";

function FormComponent({ initialValues, validationSchema, onSubmit, setToken, error, xs }) {
	let reCaptcha = useRef();
	console.count("form :");
	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
			{
				<Form>
					<Row>
						<Col xl={12} lg={20} md={24} sm={24} xs={24}>
							<Form.Item name="id" label="Employee Code:" className="mt-2">
								<Input className="input-id" name="id" placeholder="Enter code" />
							</Form.Item>
						</Col>
					</Row>
					<Row>
						<Col span={`${xs ? 24 : 18}`} offset={`${!xs ? 2 : ""}`}>
							<Row>
								<Col>
									<ReCAPTCHA
										className="mt-1"
										ref={reCaptcha}
										sitekey={recaptchaKey}
										onChange={(token) => setToken(token)}
										onExpired={(e) => setToken("")}
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
