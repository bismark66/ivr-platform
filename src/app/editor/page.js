/** @format */

import Builder from "@/components/builder";
import React from "react";

function Editor({ userTheme }) {
  return (
    <div
      style={
        {
          //   backgroundColor: "green"
        }
      }
    >
      <Builder userTheme={userTheme} />
    </div>
  );
}

export default Editor;
