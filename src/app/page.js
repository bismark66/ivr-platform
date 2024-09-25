/** @format */
"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { Button, Row, Col } from "antd";
import AppCard from "@/components/card";
import AppModal from "@/components/modal";
import Controller from "@/http";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [allFlows, setAllFlows] = useState([]);

  const openModal = (state) => {
    console.log("openModal", state);
    setOpen(state);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const fetchFlowFromFirestore = async () => {
    const querySnapshot = await Controller.getAllFlows();

    if (querySnapshot.success) {
      console.log("querySnapshot", querySnapshot);
      setAllFlows(querySnapshot.data);
    }
  };

  const deleteFlow = async (id) => {
    console.log("deleteFlow id", id);
    const querySnapshot = await Controller.deleteFlowData(id);
    console.log("querySnapshot this is doc", querySnapshot);
    if (querySnapshot.success) {
      console.log("querySnapshot", querySnapshot);
      console.log("worked");
      window.location.reload();
    }
  };

  useEffect(() => {
    console.log("");
    fetchFlowFromFirestore();
  }, []);

  const renderFlows = () => {
    return allFlows.map((flow) => {
      return (
        <Col span={6}>
          <AppCard
            key={flow.id}
            flow={flow}
            handleDelete={deleteFlow}
            modalOpen={() => openModal(true)}
          />
        </Col>
      );
    });
  };

  return (
    <main className={styles.main}>
      <AppModal visible={open} onClose={closeModal} />

      {/* <AppCard modalOpen={() => openModal(true)} /> */}
      <Row gutter={[16, 16]}>{renderFlows()}</Row>

      {/* <Button type="primary">Submit</Button> */}
    </main>
  );
}
