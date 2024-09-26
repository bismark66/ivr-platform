/** @format */

import React from "react";
import { Row, Col } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";

function AppHeader({ onThemeChange }) {
  const [theme, setTheme] = React.useState("dark");

  const handleToggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    onThemeChange(newTheme);
  };

  const iconProps = {
    style: { fontSize: "24px", color: "black" },
    onClick: handleToggleTheme,
  };

  return (
    <Row justify={"center"} align={"middle"}>
      <Col span={8} offset={16} style={{ textAlign: "center" }}>
        {theme === "dark" ? (
          <MoonOutlined
            {...iconProps}
            // rotate={129}
            style={{ color: "white", fontSize: "24px" }}
          />
        ) : (
          <SunOutlined
            {...iconProps}
            style={{ color: "white", fontSize: "24px" }}
          />
        )}
      </Col>
    </Row>
  );
}

export default AppHeader;
