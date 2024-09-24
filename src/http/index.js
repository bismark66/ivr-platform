/** @format */

// const { saveFlowToFirestore } = require("@/utils/storeController");
import { addDoc, collection } from "firebase/firestore";
import { db } from "../utils/firebase";
import { nodes, edges } from "../utils/storeController";
import { HttpResponse } from "./http_response";

const Controller = {
  saveFlowToFirestore: async (nodes, edges) => {
    console.log("---");

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
};
// module.exports = Controller;
export default Controller;
