/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { addEdge, applyNodeChanges, applyEdgeChanges } from "@xyflow/react";

const flowSlice = createSlice({
  name: "flow",
  initialState: {
    nodes: [],
    edges: [],
    buttonClicked: "",
    clickCount: 0,
    fileId: "",
    fileName: "",
  },
  reducers: {
    setNodes: (state, action) => {
      state.nodes = action.payload;
    },
    setEdges: (state, action) => {
      state.edges = action.payload;
    },
    onNodesChange: (state, action) => {
      state.nodes = applyNodeChanges(action.payload, state.nodes);
    },
    onEdgesChange: (state, action) => {
      state.edges = applyEdgeChanges(action.payload, state.edges);
    },
    onConnect: (state, action) => {
      state.edges = addEdge(action.payload, state.edges);
    },
    updateMessage: (state, action) => {
      state.buttonMessage = action.payload;
      state.clickCount = state.clickCount + 1;
    },
    addNode: (state, action) => {
      state.nodes.push(action.payload);
    },

    reset: (state) => {
      state.nodes = [];
      state.edges = [];
      state.buttonMessage = "";
      state.clickCount = 0;
      state.fileId = "";
      state.fileName = "";
    },
    setFlow: (state, action) => {
      state.nodes = action.payload.nodes;
      state.edges = action.payload.edges;
      state.fileId = action.payload.fileId;
      state.fileName = action.payload.fileName;
    },
  },
});

export const {
  setNodes,
  setEdges,
  onNodesChange,
  onEdgesChange,
  onConnect,
  updateMessage,
  addNode,
  saveFlowToFirestore,
  reset,
  setFlow,
} = flowSlice.actions;

export default flowSlice.reducer;
