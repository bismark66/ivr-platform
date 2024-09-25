/** @format */

import React, { useState, useRef } from "react";
import { Button, Modal, Row, Col, Form, Input } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";

function AppModal({ visible, onClose, confirmSave, flowName }) {
  const formRef = useRef(null);

  const handleClick = () => {
    prompt("reload");
  };

  const handleSubmit = () => {
    console.log("ref", formRef);
    if (formRef.current) {
      formRef.current.submit(); // Programmatically trigger the form submission
    }
  };

  const onFinish = (values) => flowName(values.filename);

  return (
    <>
      {confirmSave ? (
        <Modal
          title={
            <>
              <Row>
                <Col span={20}>
                  <h2>
                    {" "}
                    <ExclamationCircleFilled /> Do you want to save changes?
                  </h2>
                </Col>
                <Col span={24} style={{ marginTop: "10px" }}>
                  <Form
                    ref={formRef}
                    onFinish={onFinish}
                    style={{
                      width: "100%",
                    }}
                  >
                    <Form.Item
                      name="filename"
                      noStyle
                      //   rules={[
                      //     {
                      //       required: true,
                      //       message: "FIle name is required",
                      //     },
                      //   ]}
                    >
                      <Input
                        style={{
                          width: "100%",
                        }}
                        placeholder="Save As"
                      />
                    </Form.Item>
                  </Form>
                </Col>
              </Row>
            </>
          }
          footer={
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => handleSubmit()}
            >
              Save
            </Button>
          }
          open={visible}
          onCancel={onClose}
        ></Modal>
      ) : (
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
      )}
    </>
  );
}
export default AppModal;
