import { Button, Card, Col, Row, Table } from "antd";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { columns, dataSource } from "../../data";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfTable from "../../components/pdf-table";
import moment from "moment";
import random from "random";

const randomNum = random.int(55464381, 95464381);
const fName = `NETCSERV${moment.format("YYYY-DD-MM")}_Gacoscosim-Jerome55464381${randomNum}.pdf`;

function DetailsContainer() {
	const showDownloadLink = () => (
		<PDFDownloadLink
			document={<PdfTable />}
			className="btn btn-sm btn-block btn-outline-primary text-color-sb"
			// fileName="NETCSERV-Gacoscosim,Jerome55464381205963881.pdf"
			fileName={fName}>
			Download PDF
		</PDFDownloadLink>
	);

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
						<Row justify="center" className="mt-1">
							<Col>{showDownloadLink()}</Col>
						</Row>
					</Card>
					<div className="details-btn-wrapper">
						<Button className="back-btn" type="primary" shape="round" size="large">
							<Link to="/netcentric/public/verification">Back</Link>
						</Button>
					</div>
				</Col>
			</Row>
		</Fragment>
	);
}

export default DetailsContainer;
