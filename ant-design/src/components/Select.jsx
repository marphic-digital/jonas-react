import { HomeOutlined, SmileFilled, SmileTwoTone } from "@ant-design/icons";
import { createFromIconfontCN } from "@ant-design/icons";
import { Space } from "antd";
const IconFont = createFromIconfontCN({
  scriptUrl: [
    "//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js",
    // icon-javascript, icon-java, icon-shoppingcart (overridden)
    "//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js", // icon-shoppingcart, icon-python
  ],
});
const Index = () => {
  return (
    <div>
      <h1>ICONS</h1>
      <HomeOutlined rotate={180} />
      <SmileFilled />
      <SmileTwoTone twoToneColor={"#dead45"} />
      <div>
        <Space>
          <IconFont type="icon-javascript" />
          <IconFont type="icon-AmazonSquareFilled" />
        </Space>
      </div>
    </div>
  );
};

export default Index;
