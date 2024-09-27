/** @format */

import React from "react";
import Builder from "@/components/builder";

function Editor({ userTheme, node }) {
  return (
    <div>
      <Builder userTheme={userTheme} node={node} />
    </div>
  );
}

export default Editor;
