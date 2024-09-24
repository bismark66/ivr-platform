/** @format */
"use client";

import React from "react";
import { Row, Col, Button } from "antd";
import MenuNode from "./steps/menu";
import { useDispatch, useSelector } from "react-redux";
import {
  updateMessage,
  saveFlowToFirestore,
  reset,
} from "../utils/storeController";
import Controller from "@/http";

// const handleClick = () => {
//     dispatch(toggleButtonClick()); // Dispatch action to change button click state
// };
function ToolBar({ addNode }) {
  const dispatch = useDispatch();
  const { nodes, edges } = useSelector((state) => state.flow);

  //   const handleClick = (nodeItem) => addNode(nodeItem);
  const handleClick = (nodeItem) => dispatch(updateMessage(nodeItem));
  const saveFlow = async () => {
    // const saveResponse = dispatch(saveFlowToFirestore()); // Trigger the save action
    // console.log("saveResponse", saveResponse);

    if (nodes.length === 0 && edges.length === 0) {
      console.log("No data was found");
      return;
    }

    const res = await Controller.saveFlowToFirestore(nodes, edges);
    console.log("res", res);
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
              onClick={() => saveFlow()}
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
