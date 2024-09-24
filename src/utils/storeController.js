/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { addEdge, applyNodeChanges, applyEdgeChanges } from "@xyflow/react";
import initialNodes from "@/components/node";
import initialEdges from "@/components/edges";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import Controller from "../http/index";

const flowSlice = createSlice({
  name: "flow",
  initialState: {
    nodes: initialNodes,
    edges: initialEdges,
    buttonClicked: "",
    clickCount: 0,
    // saveNodes:false
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
    // saveFlowToFirestore: async (state) => {
    //   const nodes = state.nodes;
    //   const edges = state.edges;
    //   const res = await Controller.saveFlowToFirestore(nodes, edges);
    //   console.log("res", res);
    //   // saveFlow(nodes, edges); // Call the function to save data to Firestore
    // },
    reset: (state) => {
      state.nodes = initialNodes;
      state.edges = initialEdges;
      state.buttonMessage = "";
      state.clickCount = 0;
    },
  },
});

// const saveFlow = async (nodes, edges) => {
//   if (nodes.length === 0 && edges.length === 0) {
//     console.log("No data was found to be saved");
//     return;
//   }
//   try {
//     const flowData = {
//       nodes,
//       edges,
//       createdAt: new Date(),
//     };

//     // Save the flow data to Firestore
//     const docRef = await addDoc(collection(db, "flows"), flowData);

//     console.log("Flow successfully saved!", docRef);
//   } catch (error) {
//     console.error("Error saving flow to Firestore:", error);
//   }
// };

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
} = flowSlice.actions;

export default flowSlice.reducer;
