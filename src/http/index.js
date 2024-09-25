/** @format */

import {
  addDoc,
  collection,
  getDocs,
  getDoc,
  doc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
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

      const querySnapshotData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return { status: "success", success: true, data: querySnapshotData };
    } catch (error) {
      return { status: "failed", success: false, error: error.message };
    }
  },
  deleteFlowData: async (id) => {
    try {
      const res = await deleteDoc(doc(db, "flows", id));
      return { status: "success", success: true, data: res };
    } catch (error) {
      return { status: "failed", success: false, error: error.message };
    }
  },
  getFlow: async (id) => {
    try {
      const res = await getDoc(doc(db, "flows", id));
      return { status: "success", success: true, data: res.data() };
    } catch (error) {
      return { status: "failed", success: false, error: error.message };
    }
  },

  updateFlow: async (id, nodes, edges) => {
    try {
      const res = await setDoc(doc(db, "flows", id), {
        nodes,
        edges,
      });
      return { status: "success", success: true, data: res };
    } catch (error) {
      return { status: "failed", success: false, error: error.message };
    }
  },
};

export default Controller;
