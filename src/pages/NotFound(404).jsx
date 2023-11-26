import { Button, Col, Layout, Result, Row } from "antd";
import Headers from "../components/Headers";
import { Content } from "antd/es/layout/layout";
import Footers from "../components/Footers";
import ilustrasiNotFound from "../assets/images/ilustrasi/not-found.png";
const NotFound = () => {
  return (
    <Layout>
      <Headers />
      <Content>
        <Row justify={"center"}>
          <Col xs={24} sm={18} md={18} lg={14} xl={12}>
            <Result
              icon={<img src={ilustrasiNotFound} width={"60%"} height={"auto"} style={{ margin: "-40px 0px -40px" }} />}
              title="404"
              subTitle="Maaf, Halaman yang anda cari tidak ditemukan."
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
export default NotFound;
