/** @format */

import React from "react";
import { Row, Col } from "antd";

function AppHeader() {
  return (
    <>
      <Row>
        <Col span={8} offset={16} style={{ textAlign: "center" }}>
          col-8
        </Col>
      </Row>
    </>
  );
}

export default AppHeader;
