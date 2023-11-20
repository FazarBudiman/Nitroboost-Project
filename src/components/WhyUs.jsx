import { Col, Grid, Row, Space } from "antd";
import ilustrasiWhyUs from "../assets/images/ilustrasi/why-us-ilustrasi.png";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
const { useBreakpoint } = Grid;

const WhyUs = () => {
  const { xs, sm, md } = useBreakpoint();
  const textCenter =
    (xs || sm) && md
      ? {
          textAlign: "left",
        }
      : {
          textAlign: "center",
        };
  return (
    <Row align={{ md: "top", lg: "middle" }} justify={"center"} style={{ marginTop: 120 }}>
      <Col xs={22} sm={20} md={22} offset={2}>
        <Title level={2} style={{ letterSpacing: 6 }}>
          WHY US
        </Title>
      </Col>
      <Col xs={{ span: 20, order: 2 }} sm={{ span: 18, order: 2 }} md={{ span: 12, order: 1 }} lg={{ span: 12, order: 1 }} xl={{ span: 12, order: 1 }}>
        <Space direction="vertical" size={0} style={{ marginTop: 20 }}>
          <Paragraph style={{ fontSize: 18, color: "black", textAlign: textCenter.textAlign }}>
            Berdasarkan kegelisahan para pelaku pasar di Indonesia mengenai praktik ilegal dan keresahan yang menimpa industri trading FX serta minimnya pengetahuan dan pemahaman hukum dan manajemen dasar dalam trading.
          </Paragraph>
          <Paragraph style={{ fontSize: 18, color: "black", textAlign: textCenter.textAlign }}>
            Nitro berdiri ditengah masyarakat sebagai komunitas atau wadah bagi mereka yang ingin tahu lebih dalam, berkomunikasi dengan sesama peminat dan pelaku trading, juga untuk mendapatkan edukasi yang menyeluruh mengenai trading
          </Paragraph>
        </Space>
      </Col>
      <Col xs={{ span: 14 }} sm={{ span: 12 }} md={{ span: 8, order: 2 }} lg={{ span: 8, order: 1 }} xl={{ span: 8, order: 1 }}>
        <img src={ilustrasiWhyUs} width={"100%"} />
      </Col>
    </Row>
  );
};

export default WhyUs;
