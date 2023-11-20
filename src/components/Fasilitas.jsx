import { Col, Flex, Grid, Row } from "antd";
import Title from "antd/es/typography/Title";
import dailySignalIlustrasi from "../assets/images/ilustrasi/daily-signal-ilustrasi.png";
import liveTradingIlustrasi from "../assets/images/ilustrasi/live-trading-ilustrasi.png";
import webinarIlustrasi from "../assets/images/ilustrasi/webinar-ilustrasi.png";
import seminarIlustrasi from "../assets/images/ilustrasi/seminar-ilustrasi.png";
const { useBreakpoint } = Grid;

const Fasilitas = () => {
  const { xs } = useBreakpoint();
  const heightImg = xs ? "150px" : "250px";
  return (
    <div style={{ marginTop: 120 }}>
      <Row align={"middle"} justify={"center"}>
        <Title level={2} style={{ letterSpacing: 6 }}>
          OUR FACILITIES
        </Title>
      </Row>
      <Row align={"middle"} justify={"center"} style={{ marginTop: 25 }} gutter={[0, 40]}>
        <Col xs={16} sm={16} md={10} lg={10} xl={5} xxl={6}>
          <Flex vertical align="center">
            <Title level={3} style={{ letterSpacing: 6 }}>
              Daily Signal
            </Title>
            <img src={dailySignalIlustrasi} height={heightImg} />
          </Flex>
        </Col>
        <Col xs={16} sm={16} md={10} lg={10} xl={5} xxl={6}>
          <Flex vertical align="center">
            <Title level={3} style={{ letterSpacing: 6 }}>
              Live Trading
            </Title>
            <img src={liveTradingIlustrasi} height={heightImg} />
          </Flex>
        </Col>
        <Col xs={16} sm={16} md={10} lg={10} xl={5} xxl={6}>
          <Flex vertical align="center">
            <Title level={3} style={{ letterSpacing: 6 }}>
              Webinar
            </Title>
            <img src={webinarIlustrasi} height={heightImg} />
          </Flex>
        </Col>
        <Col xs={16} sm={16} md={10} lg={10} xl={5} xxl={6}>
          <Flex vertical align="center">
            <Title level={3} style={{ letterSpacing: 6 }}>
              Seminar
            </Title>
            <img src={seminarIlustrasi} height={heightImg} />
          </Flex>
        </Col>
      </Row>
    </div>
  );
};

export default Fasilitas;
