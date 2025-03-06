import { Divider, Typography } from "antd";
const { Title, Paragraph, Text, Link } = Typography;
const Index = () => {
  return (
    <div>
      <Title level={1}>Typography</Title>
      <Title level={2}>Typography</Title>
      <Title level={3}>Typography</Title>
      <Divider />
      <Paragraph>
        Ant Design is a design language for background applications, is refined
        by Ant UED Team.
        <Divider />
        <Text strong>
          In the process of internal desktop applications development, many
          design specs and implementations would come up, which might be
          difficult to solve with existing solutions.
        </Text>
      </Paragraph>
      <Divider />
      <ul>
        <li>
          <Link href="https://google.com">Google</Link>
        </li>
      </ul>
    </div>
  );
};

export default Index;
