/** @format */
"use client";

import React from "react";
import { Row, Col, Button } from "antd";
import MenuNode from "./steps/menu";
import { useDispatch } from "react-redux";
import { updateMessage } from "../utils/storeController";

// const handleClick = () => {
//     dispatch(toggleButtonClick()); // Dispatch action to change button click state
// };
function ToolBar({ addNode }) {
  const dispatch = useDispatch();
  //   const handleClick = (nodeItem) => addNode(nodeItem);
  const handleClick = (nodeItem) => dispatch(updateMessage(nodeItem));

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
          // style={{
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   marginTop: "20px",
          //   marginBottom: "20px",
          // }}
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
          <Col span={24} style={{ textAlign: "center" }}>
            <Button style={{ width: "80%" }} type="primary">
              Save
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ToolBar;
