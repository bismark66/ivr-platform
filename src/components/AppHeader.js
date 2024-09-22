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
    <Row>
      <Col span={8} offset={16} style={{ textAlign: "center" }}>
        {theme === "dark" ? (
          <MoonOutlined {...iconProps} rotate={129} />
        ) : (
          <SunOutlined {...iconProps} />
        )}
      </Col>
    </Row>
  );
}

export default AppHeader;
