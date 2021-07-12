import React, { Fragment } from "react";
import VerificationContainer from "../../containers/verification";
import PageLayout from "../layout";

function LandingPage() {
	return (
		<Fragment>
			<PageLayout>
				<VerificationContainer />
			</PageLayout>
		</Fragment>
	);
}

export default LandingPage;
