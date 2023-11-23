import { Col, Layout, Row } from "antd";
import Headers from "../components/Headers";
import { Content } from "antd/es/layout/layout";
import Footers from "../components/Footers";

const Fasilitas = () => {
  return (
    <Layout>
      <Headers />
      <Content>
        <Row justify={"center"} align={"middle"} style={{ height: "100vh" }}>
          <Col>
            <h2>This is Fasilitas Page</h2>
          </Col>
        </Row>
      </Content>
      <Footers />
    </Layout>
  );
};

export default Fasilitas;
