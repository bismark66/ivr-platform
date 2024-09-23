/** @format */

import React from "react";
import Builder from "@/components/builder";

function Editor({ userTheme, node }) {
  //   console.log("----", userTheme);
  return (
    <div
      style={
        {
          //   backgroundColor: "green"
        }
      }
    >
      <Builder userTheme={userTheme} node={node} />
    </div>
  );
}

export default Editor;
