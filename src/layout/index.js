import { Layout } from "antd";
import React from "react";

function PageLayout({ children }) {
	return (
		<div className="page-layout">
			<Layout>{children}</Layout>
		</div>
	);
}

export default PageLayout;
