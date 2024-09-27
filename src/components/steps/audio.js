/** @format */

import React, { useCallback } from "react";
import { Handle, Position } from "@xyflow/react";
import "./menu.css";

function AudioNode() {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Top} />
      <div style={{ textAlign: "center", color: "black" }}>
        <h1>Audio Node</h1>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
      {/* <Handle
          type="source"
          position={Position.Bottom}
          id="b"
          style={handleStyle}
        /> */}
    </div>
  );
}

export default AudioNode;
