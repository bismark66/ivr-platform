/** @format */

import React from "react";
import Builder from "@/components/builder";

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
