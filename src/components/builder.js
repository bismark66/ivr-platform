/** @format */
"use client";
import React, { useCallback } from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  //   useNodesState,
  //   useEdgesState,
  //   addEdge,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import "./builder.css";
import useStore from "../utils/store.js";
import { useSelector, useDispatch } from "react-redux";
import {
  onNodesChange,
  onEdgesChange,
  onConnect,
} from "../utils/storeController.js";
import MenuNode from "./steps/menu";
import "./steps/menu.css";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];
const nodeTypes = { dropdown: MenuNode };

export default function Builder({ userTheme }) {
  const { nodes, edges } = useSelector((state) => state.flow);
  const dispatch = useDispatch();

  const handleNodesChange = (changes) => {
    dispatch(onNodesChange(changes));
  };

  const handleEdgesChange = (changes) => {
    dispatch(onEdgesChange(changes));
  };

  const handleConnect = (connection) => {
    dispatch(onConnect(connection));
  };

  //   const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  //   const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  //   const onConnect = useCallback(
  //     (params) => setEdges((eds) => addEdge(params, eds)),
  //     [setEdges]
  //   );

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
