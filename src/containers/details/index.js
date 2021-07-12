import { Button, Card, Col, Row, Table } from "antd";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { columns, dataSource } from "../../data";

function DetailsContainer() {
	return (
		<Fragment>
			<Row span={24} justify="center">
				<Col>
					<Row justify="center" style={{ textAlign: "center", marginTop: "10rem" }}>
						<Col>
							<h1 className="employee">Jerome Gacoscosim</h1>
							<h3 className="position">Junior React Developer</h3>
						</Col>
					</Row>
					<Card bordered={true}>
						<Row justify="center">
							<Col>
								<Table dataSource={dataSource} columns={columns} bordered={true} />
							</Col>
						</Row>
					</Card>
					<Button className="back-btn" type="primary" shape="round" size="large">
						<Link to="/netcentric/public/verification">Back</Link>
					</Button>
				</Col>
			</Row>
		</Fragment>
	);
}

export default DetailsContainer;
