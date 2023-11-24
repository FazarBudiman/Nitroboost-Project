import { Col, Grid, Row, Space } from "antd";
import ilustrasiWhyUs from "../assets/images/ilustrasi/why-us-ilustrasi.png";
const { useBreakpoint } = Grid;

const CardWhyUs = () => {
  const { xs, sm, md, lg } = useBreakpoint();
  const cardElement = xs
    ? {
        marginTop: "15px",
      }
    : {
        marginTop: "70px",
      };

  const ilustrasi = xs && {
    marginTop: "-30px",
  };

  const paddingTitle = xs ? "30px" : "50px";
  return (
    <div style={cardElement}>
      {(xs && !md) || (sm && !md) || (md && !lg) ? (
        <Row gutter={[0, { sm: 30 }]}>
          <Col sm={{ offset: 1, span: 22 }} xs={22} style={{ paddingLeft: paddingTitle }}>
            <h1>WHY US</h1>
          </Col>
          <Col xs={{ offset: 4, span: 16 }} sm={{ offset: 4, span: 16 }} style={ilustrasi}>
            <img src={ilustrasiWhyUs} width={"100%"} />
          </Col>
          <Col xs={{ offset: 3, span: 18 }} sm={{ offset: 3, span: 18 }} style={{ textAlign: "center" }}>
            <Space direction="vertical" size={"middle"}>
              <p>Berdasarkan kegelisahan para pelaku pasar di Indonesia mengenai praktik ilegal dan keresahan yang menimpa industri trading FX serta minimnya pengetahuan dan pemahaman hukum dan manajemen dasar dalam trading.</p>
              <p>
                Nitro berdiri ditengah masyarakat sebagai komunitas atau wadah bagi mereka yang ingin tahu lebih dalam, berkomunikasi dengan sesama peminat dan pelaku trading, juga untuk mendapatkan edukasi yang menyeluruh mengenai trading
              </p>
            </Space>
          </Col>
        </Row>
      ) : (
        <Row align={"middle"} style={{ paddingLeft: "50px" }}>
          <Col offset={2} lg={12} xl={12}>
            <Space direction="vertical" size={"middle"}>
              <h1>WHY US</h1>
              <p>Berdasarkan kegelisahan para pelaku pasar di Indonesia mengenai praktik ilegal dan keresahan yang menimpa industri trading FX serta minimnya pengetahuan dan pemahaman hukum dan manajemen dasar dalam trading.</p>
              <p>
                Nitro berdiri ditengah masyarakat sebagai komunitas atau wadah bagi mereka yang ingin tahu lebih dalam, berkomunikasi dengan sesama peminat dan pelaku trading, juga untuk mendapatkan edukasi yang menyeluruh mengenai trading
              </p>
            </Space>
          </Col>
          <Col lg={8} xl={8}>
            <img src={ilustrasiWhyUs} width={"100%"} />
          </Col>
        </Row>
      )}
    </div>
  );
};

export default CardWhyUs;
