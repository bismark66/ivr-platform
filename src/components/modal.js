/** @format */

import React, { useState } from "react";
import { Button, Modal } from "antd";
function AppModal({ visible, onClose }) {
  const handleClick = () => {
    prompt("reload");
  };

  return (
    <>
      <Modal
        title={<p>Loading Modal</p>}
        footer={
          <Button type="primary" onClick={() => handleClick()}>
            Reload
          </Button>
        }
        open={visible}
        onCancel={onClose}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}
export default AppModal;
