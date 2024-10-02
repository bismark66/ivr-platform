/** @format */
"use client";
import React, { useEffect } from "react";
import { ReactFlow, MiniMap, Controls, Background } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import "./builder.css";
import { useSelector, useDispatch } from "react-redux";
import {
  onNodesChange,
  onEdgesChange,
  onConnect,
  addNode,
} from "../utils/storeController.js";
import MenuNode from "./steps/menu";
import "./steps/menu.css";
import AudioNode from "./steps/audio";
import VoiceRecordNode from "./steps/voiceRecord";
import TransferCallNode from "./steps/transferCall";

const nodeTypes = {
  AudioNode: AudioNode,
  MenuNode: MenuNode,
  VoiceRecordNode: VoiceRecordNode,
  TransferCallNode: TransferCallNode,
};
export default function Builder({ userTheme, node }) {
  const dispatch = useDispatch();
  const { nodes, edges } = useSelector((state) => state.flow);
  const buttonMessage = useSelector((state) => state.flow.buttonMessage);
  const clickCount = useSelector((state) => state.flow.clickCount);
  let halfScreen = 2;

  const addNodeToFlow = (buttonMessage) => {
    console.log("nnn");
    if (!buttonMessage) return;
    const newNode = {
      id: `${buttonMessage}-${clickCount}`,
      type: buttonMessage,
      position: {
        x: window.screen.width / halfScreen,
        y: window.screen.height / halfScreen,
      },
      data: { value: buttonMessage },
    };
    console.log("newNode", newNode);

    const nodeExists = nodes.some((node) => node.id === newNode.id);
    if (!nodeExists) {
      dispatch(addNode(newNode));
    }
  };

  useEffect(() => {
    if (clickCount > 0) {
      console.log("Received message:", buttonMessage);
      addNodeToFlow(buttonMessage);
    }
  }, [clickCount]);

  const handleNodesChange = (changes) => {
    dispatch(onNodesChange(changes));
  };

  const handleEdgesChange = (changes) => {
    dispatch(onEdgesChange(changes));
  };

  const handleConnect = (connection) => {
    dispatch(onConnect(connection));
  };

  return (
    <div style={{ width: "100vw", height: "90vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={handleNodesChange}
        onEdgesChange={handleEdgesChange}
        onConnect={handleConnect}
        nodeTypes={nodeTypes}
        colorMode={userTheme}
        
      >
        <Controls />
        <MiniMap position="bottom-center" />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
