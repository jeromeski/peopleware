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
			<h3>
				Sorry, we can't find that ID in the database. Please check your input for the following
				cases:
			</h3>
			<p>- Wrong input of characters</p>
			<p>- Overlooked trailing spaces</p>
		</Modal>
	);
}

export default ModalComponent;
