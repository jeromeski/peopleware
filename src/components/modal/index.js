import { CloseCircleOutlined } from "@ant-design/icons";
import Modal from "antd/lib/modal/Modal";
import React from "react";

function ModalComponent({ show, onOk, onCancel }) {
	return (
		<Modal
			title={[<CloseCircleOutlined />, <span className="modal-title">Error</span>]}
			visible={show}
			onOk={onOk}
			onCancel={onCancel}
			keyboard={true}
			okType="secondary">
			<h3>Sorry, we can't find that ID in the database. Please check your input for:</h3>
			<p>- Trailing spaces</p>
			<p>- Wrong characters</p>
		</Modal>
	);
}

export default ModalComponent;
