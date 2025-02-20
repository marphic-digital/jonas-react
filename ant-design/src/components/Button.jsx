import { Button, FloatButton } from "antd";
import { useState } from "react";
import { PoweroffOutlined, QuestionCircleFilled } from "@ant-design/icons";
function Index() {
  const [loading, setLoading] = useState(false);
  const btnLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  const onClicked = () => {
    alert("Button is clicked");
  };
  return (
    <>
      <Button type="primary" size="large">
        Primary
      </Button>
      <Button type="link" size="small">
        Link
      </Button>
      <Button type="dashed" disabled>
        Dashed
      </Button>
      <Button type="ghost" loading={loading} onClick={btnLoading}>
        Ghost
      </Button>
      <Button type="text" icon={<PoweroffOutlined />}>
        Text
      </Button>
      <Button type="primary" onClick={onClicked}>
        Button
      </Button>
      <Button color="danger" variant="filled">
        Filled
      </Button>
      <FloatButton
        badge={{ count: 3, color: "yellow" }}
        tooltip={"Basic"}
        shape="circle"
      ></FloatButton>
      <FloatButton
        type="danger"
        icon={<QuestionCircleFilled />}
        style={{ insetBlockEnd: 200 }}
      ></FloatButton>
      <FloatButton.Group
        trigger="click"
        shape="circle"
        style={{ insetInlineEnd: 80 }}
      >
        <FloatButton
          type="danger"
          icon={<QuestionCircleFilled />}
        ></FloatButton>
        <FloatButton
          type="primary"
          icon={<QuestionCircleFilled />}
          style={{ insetBlockEnd: 200 }}
        ></FloatButton>
      </FloatButton.Group>
    </>
  );
}
export default Index;
