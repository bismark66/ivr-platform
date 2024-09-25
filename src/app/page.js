/** @format */
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { Button, Row, Col } from "antd";
import AppCard from "@/components/card";
import AppModal from "@/components/modal";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";
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
            modalOpen={() => openModal(true)}
          />
        </Col>
      );
    });
  };

  return (
    <main className={styles.main}>
      <AppModal visible={open} onClose={closeModal} />
      <h2
      // style={{ textAlign: "center", color: "black" }}
      >
        IVR - Platform lorem ipsumPellentesque laoreet erat vel nisi volutpat,
        vitae eleifend lorem bibendum. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Duis non lorem
        blandit, sollicitudin lectus vitae, pharetra quam. Morbi ut facilisis
        nunc. Quisque nisi lorem, sollicitudin eu tincidunt non, lobortis nec
        odio. Duis in neque vitae purus finibus luctus. Donec consequat
        imperdiet odio vitae tristique. Cras venenatis mauris quis rhoncus
        efficitur. Quisque dignissim, ex ac vehicula pulvinar, dui elit varius
        ex, sit amet fringilla magna libero in purus. Duis eu nulla nunc. Sed
        vel diam varius, pellentesque nisi nec, mollis nisi. Praesent tincidunt,
        diam eu ultricies pulvinar, justo lorem pellentesque enim, eu iaculis
        tortor tortor vitae diam. In vitae lacus eros. Cras neque purus,
        placerat quis interdum eu, imperdiet vel turpis. Ut tellus metus,
        maximus quis lacus id, sollicitudin maximus felis. Donec finibus orci
        vel augue iaculis porta. Pellentesque ut facilisis risus. Sed
        condimentum sem id imperdiet ultricies. Etiam mi arcu, molestie et massa
        vel, posuere iaculis metus. Vestibulum pulvinar augue et dignissim
        luctus. Proin tristique lacus vel arcu finibus, eu placerat ex
        fermentum. Phasellus non pellentesque nisi. Aliquam ante ex, accumsan
        vitae aliquet ac, malesuada a ex. Etiam sagittis, libero eu vulputate
        cursus, risus lectus hendrerit tellus, vel congue velit arcu id dolor.
      </h2>

      {/* <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      > */}
      {/* <AppCard modalOpen={() => console.log("clicked")} /> */}
      {/* <AppCard modalOpen={() => openModal(true)} /> */}
      <Row gutter={[16, 16]}>{renderFlows()}</Row>
      {/* </div> */}

      {/* <Button type="primary">Submit</Button> */}
    </main>
  );
}
