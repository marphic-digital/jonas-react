import { Input, Select, Space } from "antd";

const { Option } = Select;
// const { search } = input;
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

// const Option = [
//   {
//     value: "zhejiang",
//     label: "Zhejiang",
//   },
//   {
//     value: "jiangsu",
//     label: "Jiangsu",
//   },
// ];
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
      <div>
        <Input defaultValue="32103"></Input>
        <Space.Compact>
          <Input style={{ width: "20%" }} defaultValue="+92"></Input>
          <Input style={{ width: "80%" }} defaultValue="1234567"></Input>
        </Space.Compact>
      </div>
    </>
  );
};

export default Index;
