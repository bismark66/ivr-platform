/** @format */
"use client";
import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Col, Row, Button } from "antd";
const { Meta } = Card;
import Controller from "@/http";

function AppCard({ modalOpen, flow }) {
  /*************  ✨ Codeium Command 🌟  *************/
  const handleDelete = async () => {
    console.log("---", flow.id);
    try {
      const res = await Controller.deleteFlowData(flow.id);

      if (res.success) {
        console.log("succ", res);
      }
    } catch (error) {
      console.log("res", error);
    }
  };
  /******  dc3ca869-5aa7-4b37-9b7e-7f096471e6f4  *******/

  const handleModalOpen = () => modalOpen(true);

  const flowSnippet = flow.nodes
    .map((node) => {
      return `${node.type.slice(0, -4)}`;
    })
    .join(" - ");

  return (
    <Card
      style={{
        width: 300,
      }}
      actions={[
        <DeleteOutlined
          style={{ color: "red" }}
          onClick={() => handleDelete()}
        />,
        <EditOutlined key="edit" />,
        // <Button onClick={() => handleModalOpen()} type="primary">
        <EllipsisOutlined
          key="ellipsis"
          onClick={() => handleModalOpen()}
          //   style={{ paddingLeft: "10px" }}
        />,

        // </Button>,
        // <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      {/* <Row justify={"center"} style={{ textAlign: "center" }}>
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
      </Row> */}

      <Meta
        title={flow?.fileName || "Untitled"}
        description={<>{flowSnippet}</>}
      />
    </Card>
  );
}
export default AppCard;
