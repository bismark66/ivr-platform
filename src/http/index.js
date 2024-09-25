/** @format */

import { addDoc, collection, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "../utils/firebase";

const Controller = {
  saveFlowToFirestore: async (nodes, edges, fileName) => {
    try {
      const flowData = {
        nodes,
        edges,
        fileName,
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

      // spread querySnapshot and get only id and _documents filed and return
      const querySnapshotData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log("querySnapshot", querySnapshot);
      return { status: "success", success: true, data: querySnapshotData };
    } catch (error) {
      return { status: "failed", success: false, error: error.message };
    }
  },
  deleteFlowData: async (id) => {
    try {
      console.log("deleteFlow", id);
      const docRef = doc(db, "flows", id);

      const res = await deleteDoc(docRef);

      console.log(`Document with ID ${id} has been deleted.`);
      return { status: "success", success: true, data: res };
    } catch (error) {
      return { status: "failed", success: false, error: error.message };
    }
  },
};

export default Controller;
