/** @format */

import React from "react";
import Link from "next/link";
import { Menu } from "antd";

function Navbar() {
  const menuItems = [
    { label: <Link href="/">Dashboard</Link>, key: "Dashboard" },
    { label: <Link href="/editor">Editor</Link>, key: "Editor" },
  ];

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["4"]}
      items={menuItems}
    />
  );
}

export default Navbar;
