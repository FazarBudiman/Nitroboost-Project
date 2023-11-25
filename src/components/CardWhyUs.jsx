import { Col, Grid, Row, Space } from "antd";
import ilustrasiWhyUs from "../assets/images/ilustrasi/why-us-ilustrasi.png";
const { useBreakpoint } = Grid;

const CardWhyUs = () => {
  const { xs, sm, md, lg } = useBreakpoint();

  return (
    <div className="card-why-us">
      {console.log(xs, sm, md, lg)}
      {(!xs && !sm && !md) || (xs && !md) || (sm && !md) ? (
        <Row gutter={[0, { sm: 30 }]}>
          <Col sm={{ offset: 1, span: 22 }} xs={22}>
            <h1>WHY US</h1>
          </Col>
          <Col xs={{ offset: 2, span: 18 }} sm={{ offset: 2, span: 18 }}>
            <img src={ilustrasiWhyUs} className="ilustrasi-why-us" />
          </Col>
          <Col xs={{ offset: 1, span: 20 }} sm={{ offset: 1, span: 20 }} className="content-why-us">
            <Space direction="vertical" size={"middle"}>
              <p>Berdasarkan kegelisahan para pelaku pasar di Indonesia mengenai praktik ilegal dan keresahan yang menimpa industri trading FX serta minimnya pengetahuan dan pemahaman hukum dan manajemen dasar dalam trading.</p>
              <p>
                Nitro berdiri ditengah masyarakat sebagai komunitas atau wadah bagi mereka yang ingin tahu lebih dalam, berkomunikasi dengan sesama peminat dan pelaku trading, juga untuk mendapatkan edukasi yang menyeluruh mengenai trading
              </p>
            </Space>
          </Col>
        </Row>
      ) : (
        <Row align={"middle"}>
          <Col md={{ offset: 1, span: 11 }} lg={{ offset: 2, span: 12 }} xl={{ offset: 2, span: 12 }}>
            <Space direction="vertical" size={"middle"}>
              <h1>WHY US</h1>
              <p>Berdasarkan kegelisahan para pelaku pasar di Indonesia mengenai praktik ilegal dan keresahan yang menimpa industri trading FX serta minimnya pengetahuan dan pemahaman hukum dan manajemen dasar dalam trading.</p>
              <p>
                Nitro berdiri ditengah masyarakat sebagai komunitas atau wadah bagi mereka yang ingin tahu lebih dalam, berkomunikasi dengan sesama peminat dan pelaku trading, juga untuk mendapatkan edukasi yang menyeluruh mengenai trading
              </p>
            </Space>
          </Col>
          <Col md={10} lg={8} xl={8}>
            <img src={ilustrasiWhyUs} className="ilustrasi-why-us" />
          </Col>
        </Row>
      )}
    </div>
  );
};

export default CardWhyUs;
