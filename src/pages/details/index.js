import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import DetailsContainer from "../../containers/details";

function DetailsPage() {
	return (
		<Fragment>
			<Helmet>
				<title>Peopleware | Jerome Gacoscosim</title>
				<meta name="description" content="Employee Verification and Tracking System" />
			</Helmet>
			<DetailsContainer />
		</Fragment>
	);
}

export default DetailsPage;
