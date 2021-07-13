export const instructions =
	"Please enter the code from the COE that has been provided. Click submit to find the employee information. After viewing the verification information, you may continue to use this form to verify additional employees as needed.";

export const dataSource = [
	{
		key: "1",
		company: "Netcentric Inc",
		id: "491342",
		name: "Gacoscosim, Jerome M.",
		startDate: "03/07/18",
		endDate: "07/31/19",
		status: "Resigned",
		remarks: "Cleared"
	}
];

export const columns = [
	{
		title: "Company",
		dataIndex: "company",
		key: "company"
	},
	{
		title: "Employee ID",
		dataIndex: "id",
		key: "id",
		responsive: ["md"]
	},
	{
		title: "Name",
		dataIndex: "name",
		key: "name"
	},
	{
		title: "Start Date",
		dataIndex: "startDate",
		key: "startDate",
		responsive: ["md"]
	},
	{
		title: "End Date",
		dataIndex: "endDate",
		key: "endDate",
		responsive: ["md"]
	},
	{
		title: "Status",
		dataIndex: "status",
		key: "status"
	},
	{
		title: "Remarks",
		dataIndex: "remarks",
		key: "remarks",
		responsive: ["md"]
	}
];

export const pdfData = [
	{
		company: "Netcentric",
		employeeId: "492785",
		name: "Gacoscosim, Jerome M.",
		position: "Jr React Developer",
		startDate: "03/07/18",
		endDate: "07/31/19",
		status: "Resigned",
		remarks: "Cleared"
	}
];
