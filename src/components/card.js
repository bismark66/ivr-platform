/** @format */
"use client";
import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Col, Row, Button } from "antd";
const { Meta } = Card;

function AppCard({ modalOpen }) {
  const handleModalOpen = () => modalOpen(true);

  return (
    <Card
      style={{
        width: 400,
      }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      // actions={[
      //   <SettingOutlined key="setting" />,
      //   <EditOutlined key="edit" />,
      //   <EllipsisOutlined key="ellipsis" />,
      // ]}
    >
      <Row justify={"center"} style={{ textAlign: "center" }}>
        <Col span={8}>
          <Button type="primary">
            <SettingOutlined key="setting" style={{ paddingRight: "10px" }} />
            Edit
          </Button>
        </Col>
        <Col span={8}>
          <Button type="primary">
            <EditOutlined key="edit" style={{ paddingRight: "10px" }} />
            Delete
          </Button>
        </Col>
        <Col span={8}>
          {" "}
          <Button onClick={() => handleModalOpen()} type="primary">
            <EllipsisOutlined key="ellipsis" style={{ paddingLeft: "10px" }} />
            Simulate
          </Button>
        </Col>
      </Row>
    </Card>
  );
}
export default AppCard;
