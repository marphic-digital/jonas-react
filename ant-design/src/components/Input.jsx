import React from "react";
import { Input, Select, Space } from "antd";

const { Option } = Select;
const selectBefore = (
  <Select defaultValue="http://">
    <Option value="http://">http://</Option>
    <Option value="https://">https://</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue=".com">
    <Option value=".com"></Option>
    <Option value=".pk"></Option>
    <Option value=".bj"></Option>
    <Option value=".dev"></Option>
  </Select>
);

const Index = () => {
  return (
    <>
      <div style={{ marginBlockStart: "20px", marginBlockEnd: "20px" }}>
        <Input large type="text" placeholder="Full Name" />
        <Input variant="filled" type="text" placeholder="Full Name" />
        <Input small type="text" placeholder="Full Name" />
      </div>
      <div>
        <Space direction="vertical">
          <Input
            addonBefore="http://"
            addonAfter=".com"
            defaultValue="mySite"
          ></Input>
          <Input
            addonBefore={selectBefore}
            addonAfter={selectAfter}
            defaultValue="mySite"
          ></Input>
        </Space>
      </div>
    </>
  );
};

export default Index;
