import { Button, Col, Layout, Result, Row } from "antd";
import Headers from "../components/Headers";
import { Content } from "antd/es/layout/layout";
import Footers from "../components/Footers";
import ilustrasiUnderConstruction from "../assets/images/ilustrasi/page-under-construction.png";

const UnderConstruction = () => {
  return (
    <Layout>
      <Headers />
      <Content>
        <Row justify={"center"}>
          <Col xs={24} sm={18} md={18} lg={14} xl={12}>
            <Result
              icon={<img src={ilustrasiUnderConstruction} width={"60%"} height={"auto"} style={{ margin: "-40px 0px -40px" }} />}
              title="200"
              subTitle="Maaf, Halaman sedang berada dalam tahap pengembangan."
              extra={
                <Button href="/" type="primary">
                  Kembali
                </Button>
              }
            />
          </Col>
        </Row>
      </Content>
      <Footers />
    </Layout>
  );
};
export default UnderConstruction;
