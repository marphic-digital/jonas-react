import { Select } from "antd";
import { createFromIconfontCN } from "@ant-design/icons";
const { Option } = Select;
const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

const Index = () => {
  return (
    <div>
      <h1>Select Component</h1>
      <IconFont type="icon-tuichu" />
      <IconFont style={{ color: "#000" }} type="icon-dustbin" />
      <Select defaultValue={"lucy"} style={{ width: 120 }}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
    </div>
  );
};

export default Index;
