import React, { Fragment } from "react";
import VerificationContainer from "../../containers/verification";
import PageLayout from "../../layout";
import { Helmet } from "react-helmet";

function LandingPage() {
	return (
		<Fragment>
			<Helmet>
				<title>Peopleware | Employee Verification System</title>
				<meta name="description" content="Employee Verification and Tracking System" />
			</Helmet>
			<PageLayout>
				<VerificationContainer />
			</PageLayout>
		</Fragment>
	);
}

export default LandingPage;
