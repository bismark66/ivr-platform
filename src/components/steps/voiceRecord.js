/** @format */

import React, { useCallback } from "react";
import { Handle, Position } from "@xyflow/react";
import { Dropdown, Space } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import "./menu.css";
const handleStyle = { left: 10 };

function VoiceRecordNode() {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return <div>VoiceRecordNode</div>;
}

export default VoiceRecordNode;