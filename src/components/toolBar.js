/** @format */
"use client";

import React, { useState } from "react";
import { Row, Col, Button, Modal } from "antd";
import MenuNode from "./steps/menu";
import { useDispatch, useSelector } from "react-redux";
import {
  updateMessage,
  saveFlowToFirestore,
  reset,
} from "../utils/storeController";
import Controller from "@/http";
import AppModal from "./modal";
import { ExclamationCircleFilled } from "@ant-design/icons";

// const handleClick = () => {
//     dispatch(toggleButtonClick()); // Dispatch action to change button click state
// };
const { confirm } = Modal;

const showConfirm = () => {
  confirm({
    title: "Do you want to delete these items?",
    icon: <ExclamationCircleFilled />,
    content:
      "When clicked the OK button, this dialog will be closed after 1 second.",
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log("Oops errors!"));
    },
    onCancel() {
      console.log("Cancel");
    },
  });
};

function ToolBar() {
  const dispatch = useDispatch();
  const { nodes, edges, buttonClicked, clickCount, fileId, fileName } =
    useSelector((state) => state.flow);

  const [open, setOpen] = useState(false);

  const openModal = (state) => {
    console.log("openModal", state);
    setOpen(state);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const handleClick = (nodeItem) => dispatch(updateMessage(nodeItem));
  const saveFlow = async (name) => {
    console.log("filename was called here", name);
    if (nodes.length === 0 && edges.length === 0) {
      console.log("No data was found");
      return;
    }

    // console.log("fileId", fileId);
    if (fileId && name) {
      const res = await Controller.saveFlowToFirestore(nodes, edges, name);
      console.log("res", res);
      if (res.success) {
        setOpen(false);
      }
      return;
    } else if (fileId) {
      const res = await Controller.updateFlow(fileId, {
        nodes,
        edges,
        fileName: name || fileName,
      });
      console.log("res", res);
      if (res.success) {
        setOpen(false);
      }
      return;
    } else {
      const res = await Controller.saveFlowToFirestore(nodes, edges, name);
      console.log("res", res);
      if (res.success) {
        setOpen(false);
      }
    }
  };

  const resetFlow = () => dispatch(reset());

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "space-between",
          height: "100%",
        }}
      >
        <AppModal
          visible={open}
          onClose={closeModal}
          confirmSave={true}
          flowName={saveFlow}
        />
        <Row
          justify={"center"}
          align={"middle"}
          style={{ marginTop: "20px" }}
          gutter={[16, 16]}
        >
          <Col span={24} style={{ textAlign: "center" }}>
            <Button
              style={{ width: "80%" }}
              type="primary"
              onClick={() => handleClick("AudioNode")}
            >
              Audio Step
            </Button>
          </Col>
          <Col span={24} style={{ textAlign: "center" }}>
            <Button
              style={{ width: "80%" }}
              type="primary"
              onClick={() => handleClick("MenuNode")}
            >
              Menu
            </Button>
          </Col>
          <Col span={24} style={{ textAlign: "center" }}>
            <Button
              style={{ width: "80%" }}
              type="primary"
              onClick={() => handleClick("TransferCallNode")}
            >
              Transfer Call
            </Button>
          </Col>
          <Col span={24} style={{ textAlign: "center" }}>
            <Button
              style={{ width: "80%" }}
              type="primary"
              onClick={() => handleClick("VoiceRecordNode")}
            >
              Voice Recorder
            </Button>
          </Col>
        </Row>
        <Row
          justify={"center"}
          align={"middle"}
          style={{ marginBottom: "20px" }}
        >
          <Col span={12} style={{ textAlign: "center" }}>
            <Button
              style={{ width: "80%" }}
              type="primary"
              // onClick={() => saveFlow()}
              onClick={() => openModal(true)}
              // onClick={showConfirm()}
            >
              Save
            </Button>
          </Col>
          <Col span={12} style={{ textAlign: "center" }}>
            <Button
              style={{ width: "80%" }}
              type="primary"
              onClick={() => resetFlow()}
            >
              Reset
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ToolBar;
