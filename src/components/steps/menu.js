/** @format */

import React, { useCallback } from "react";
import { Handle, Position } from "@xyflow/react";
import { Dropdown, Space } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import "./menu.css";
const handleStyle = { left: 10 };

export default function MenuNode({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      ),
      icon: <SmileOutlined />,
      disabled: true,
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: "4",
      danger: true,
      label: "a danger item",
    },
  ];

  return (
    <>
      <div className="text-updater-node">
        <Handle type="target" position={Position.Top} />
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Hover me
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>

        <Handle type="source" position={Position.Bottom} id="a" />
        {/* <Handle
          type="source"
          position={Position.Bottom}
          id="b"
          style={handleStyle}
        /> */}
      </div>
    </>
  );
}
