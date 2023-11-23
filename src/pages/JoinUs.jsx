import { Layout } from "antd";
import Headers from "../components/Headers";
import { Content } from "antd/es/layout/layout";
import Footers from "../components/Footers";
import CardJoinUs from "../components/CardJoinUs";

const JoinUs = () => {
  return (
    <Layout>
      <Headers />
      <Content>
        <CardJoinUs />
      </Content>
      <Footers />
    </Layout>
  );
};

export default JoinUs;
