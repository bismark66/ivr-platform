/** @format */

// const { saveFlowToFirestore } = require("@/utils/storeController");
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";
import { nodes, edges } from "../utils/storeController";
import { HttpResponse } from "./http_response";

const Controller = {
  saveFlowToFirestore: async (nodes, edges) => {
    try {
      const flowData = {
        nodes,
        edges,
        createdAt: new Date(),
      };

      const res = await addDoc(collection(db, "flows"), flowData);

      return { status: "success", success: true, data: res };
    } catch (error) {
      return { status: "failed", success: false, error: error.message };
    }
  },
  getAllFlows: async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "flows"));
      console.log("querySnapshot", querySnapshot);
      return { status: "success", success: true, data: querySnapshot };
    } catch (error) {
      return { status: "failed", success: false, error: error.message };
    }
  },
  deleteFlowData: async (id) => {
    try {
      // Reference to the document to delete
      const docRef = doc(db, "flows", id);

      // Delete the document
      const res = await deleteDoc(docRef);

      console.log(`Document with ID ${id} has been deleted.`);
      return { status: "success", success: true, data: res };
    } catch (error) {
      return { status: "failed", success: false, error: error.message };
    }
  },
};

export default Controller;
