/** @format */

import React, { useState } from "react";
import { Button, Modal, Row, Col, Form, Input } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";

function AppModal({ visible, onClose, confirmSave }) {
  const handleClick = () => {
    prompt("reload");
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

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
                    onFinish={onFinish}
                    style={{
                      //   maxWidth: 600,
                      width: "100%",
                    }}
                  >
                    <Form.Item
                      name="username"
                      noStyle
                      rules={[
                        {
                          required: true,
                          message: "Username is required",
                        },
                      ]}
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
              onClick={() => handleClick()}
            >
              Submit
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
