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
const AppCard = () => (
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
        <Button onClick={() => console.log("clicked")} type="primary">
          <SettingOutlined key="setting" style={{ paddingRight: "10px" }} />
          Edit
        </Button>
      </Col>
      <Col span={8}>
        <Button onClick={() => console.log("clicked")} type="primary">
          <EditOutlined key="edit" style={{ paddingRight: "10px" }} />
          Delete
        </Button>
      </Col>
      <Col span={8}>
        {" "}
        <Button onClick={() => console.log("clicked")} type="primary">
          <EllipsisOutlined key="ellipsis" style={{ paddingLeft: "10px" }} />
          Simulate
        </Button>
      </Col>
    </Row>
    {/* <Meta
      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
      title="Card title"
      description="This is the description"
    /> */}
  </Card>
);
export default AppCard;
