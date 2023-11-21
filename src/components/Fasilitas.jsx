import { Col, Flex, Grid, Row } from "antd";
import dailySignalIlustrasi from "../assets/images/ilustrasi/daily-signal-ilustrasi.png";
import liveTradingIlustrasi from "../assets/images/ilustrasi/live-trading-ilustrasi.png";
import webinarIlustrasi from "../assets/images/ilustrasi/webinar-ilustrasi.png";
import seminarIlustrasi from "../assets/images/ilustrasi/seminar-ilustrasi.png";
const { useBreakpoint } = Grid;

const Fasilitas = () => {
  const { xs } = useBreakpoint();
  const heightImg = xs ? "150px" : "200px";
  return (
    <div style={{ marginTop: 120 }}>
      <Row align={"middle"} justify={"center"}>
        <h1>OUR FACILITIES</h1>
      </Row>
      <Row align={"middle"} justify={"center"} style={{ marginTop: 35 }} gutter={[0, 30]}>
        <Col xs={16} sm={16} md={10} lg={10} xl={{ span: 5 }}>
          <Flex vertical align="center">
            <h2>Daily Signal</h2>
            <img src={dailySignalIlustrasi} height={heightImg} />
          </Flex>
        </Col>
        <Col xs={16} sm={16} md={10} lg={10} xl={{ span: 5 }}>
          <Flex vertical align="center">
            <h2>Live Trading</h2>
            <img src={liveTradingIlustrasi} height={heightImg} />
          </Flex>
        </Col>
        <Col xs={16} sm={16} md={10} lg={10} xl={{ span: 5 }}>
          <Flex vertical align="center">
            <h2>Webinar</h2>
            <img src={webinarIlustrasi} height={heightImg} />
          </Flex>
        </Col>
        <Col xs={16} sm={16} md={10} lg={10} xl={{ span: 5 }}>
          <Flex vertical align="center">
            <h2>Seminar</h2>
            <img src={seminarIlustrasi} height={heightImg} />
          </Flex>
        </Col>
      </Row>
    </div>
  );
};

export default Fasilitas;
