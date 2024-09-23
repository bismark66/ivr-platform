/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { addEdge, applyNodeChanges, applyEdgeChanges } from "@xyflow/react";
import initialNodes from "@/components/node";
import initialEdges from "@/components/edges";

const flowSlice = createSlice({
  name: "flow",
  initialState: {
    nodes: initialNodes,
    edges: initialEdges,
    buttonClicked: "",
    clickCount: 0,
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
      state.buttonMessage = action.payload; // Set the string passed from button
      state.clickCount = state.clickCount + 1;
    },
    addNode: (state, action) => {
      state.nodes.push(action.payload); // Add new node to the state
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
} = flowSlice.actions;

export default flowSlice.reducer;
