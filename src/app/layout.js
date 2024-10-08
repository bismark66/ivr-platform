/** @format */
"use client";
import React, { useEffect, useState } from "react";
import "./globals.css";
// import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, theme, ConfigProvider, Menu } from "antd";
import AppHeader from "@/components/AppHeader";
import Navbar from "@/components/navbar";
import { usePathname } from "next/navigation";
import { Provider } from "react-redux";
import { store } from "../utils/store";
import ToolBar from "@/components/toolBar";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

const { Header, Content, Sider } = Layout;

export default function RootLayout({ children }) {
  const [sidebar, showSidebar] = useState(false);
  const path = usePathname();
  const [userTheme, setUserTheme] = useState("light");
  const [node, clickedNode] = useState();

  const handleThemeChange = (newTheme) => {
    console.log(newTheme);
    setUserTheme(newTheme);
    return;
  };

  const addNode = (node) => {
    console.log(node);
    clickedNode(node);
    return;
  };

  useEffect(() => {
    path === "/editor" ? showSidebar(true) : showSidebar(false);
  }, [path]);

  const Pages = React.cloneElement(children, { userTheme, node });

  const items = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    UserOutlined,
  ].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }));

  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              algorithm:
                userTheme === "light"
                  ? theme.defaultAlgorithm
                  : theme.darkAlgorithm,
              token: {
                colorPrimary: "#1890ff", // Default primary blue color for light theme
                colorPrimaryDark: "#001529", // Default primary dark color
              },
            }}
          >
            <Layout style={{ height: "100vh", overflow: "hidden" }}>
              <Header
                style={{
                  padding: 0,
                  // background: "white",
                  color: "white",
                }}
              >
                <AppHeader onThemeChange={handleThemeChange} />
              </Header>
              <Layout>
                <Sider
                  breakpoint="lg"
                  collapsedWidth="0"
                  onBreakpoint={(broken) => {
                    console.log(broken);
                  }}
                  onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                  }}
                  style={{ overflowY: "hidden" }}
                >
                  <div className="demo-logo-vertical" />
                  {/* <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={["4"]}
                    items={items}
                  /> */}
                  <Navbar />
                </Sider>
                <Content
                  style={{
                    // margin: "24px 16px 0",
                    overflowY: "auto",
                    // minHeight: "100vh",
                    height: "100vh",
                  }}
                >
                  <div
                    style={{
                      padding: 15,
                      // minHeight: 360,
                      // background: "white",
                      // borderRadius: 30,
                    }}
                  >
                    <Provider store={store}>{Pages}</Provider>
                  </div>
                </Content>
                {sidebar && (
                  <Provider store={store}>
                    <Sider width="10%" style={{ backgroundColor: "#4096ff" }}>
                      <ToolBar addNode={addNode} />
                    </Sider>
                  </Provider>
                )}
              </Layout>
            </Layout>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
