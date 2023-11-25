import { Layout } from "antd";
import Headers from "../components/Headers";
import { Content } from "antd/es/layout/layout";
import Footers from "../components/Footers";
import CardJoinUs from "../components/CardJoinUs";
import { useParams } from "react-router-dom";

const JoinUs = () => {
  const { kodeReferral } = useParams();

  return (
    <Layout>
      <Headers />
      <Content>
        <CardJoinUs kodeReferral={kodeReferral} />
      </Content>
      <Footers />
    </Layout>
  );
};

export default JoinUs;
