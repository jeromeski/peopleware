import { CloseCircleOutlined } from "@ant-design/icons";
import Modal from "antd/lib/modal/Modal";
import React from "react";

function ModalComponent({ show, onOk, onCancel }) {
	return (
		<Modal
			title={[
				<CloseCircleOutlined key="5" />,
				<span className="modal-title" key="6">
					Error
				</span>
			]}
			visible={show}
			onOk={onOk}
			onCancel={onCancel}
			keyboard={true}
			okType="secondary">
			<h3 key={"1"}>
				Sorry, we can't find that ID in the database. Please check your input for the following
				cases:
			</h3>
			<p key="2">- Wrong input of characters</p>
			<p key="3">- Overlooked trailing spaces</p>
		</Modal>
	);
}

export default ModalComponent;
