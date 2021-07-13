import { Button, Card, Col, Row, Table } from "antd";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { columns, dataSource } from "../../data";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfTable from "../../components/pdf-table";

function DetailsContainer() {
	const showDownloadLink = () => (
		<PDFDownloadLink
			document={<PdfTable />}
			className="btn btn-sm btn-block btn-outline-primary text-color-sb"
			fileName="jerome.pdf">
			Download PDF
		</PDFDownloadLink>
		// <PDFViewer>
		// 	<Document>
		// 		<Page>
		// 			<View>
		// 				<Text>Hello World!</Text>
		// 			</View>
		// 		</Page>
		// 	</Document>
		// </PDFViewer>
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
						<Row justify="center">
							<Col>{showDownloadLink(dataSource, columns)}</Col>
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
