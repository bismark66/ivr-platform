/** @format */
"use client";
import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
const { Meta } = Card;

function AppCard({ modalOpen, flow, handleDelete }) {
  const handleDeleteClick = async (flow) => handleDelete(flow);

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
          onClick={() => handleDeleteClick(flow.id)}
        />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" onClick={() => handleModalOpen()} />,
      ]}
    >
      <Meta
        title={flow?.fileName || "Untitled"}
        description={<>{flowSnippet}</>}
      />
    </Card>
  );
}
export default AppCard;
