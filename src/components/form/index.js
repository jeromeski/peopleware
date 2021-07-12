import { Col, Input, Row } from "antd";
import Form from "antd/lib/form/Form";
import { Formik } from "formik";
import { SubmitButton } from "formik-antd";
import React, { Fragment, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function FormComponent({ onSubmit, validationSchema, initialValues, setToken, error, xs }) {
	const reCaptcha = useRef();

	return (
		<Fragment>
			<Formik
				onSubmit={onSubmit}
				validationSchema={validationSchema}
				initialValues={initialValues}
				setToken={setToken}>
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
							<Col></Col>
						</Row>
						<Row>
							<Col span={`${xs ? 24 : 18}`} offset={`${!xs ? 2 : ""}`}>
								<Row>
									<Col>
										<ReCAPTCHA
											className="mt-1"
											ref={reCaptcha}
											sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
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
		</Fragment>
	);
}

export default FormComponent;
