import { Col, ConfigProvider, Divider, Grid, Row, Space, Typography } from "antd";
import { Footer } from "antd/es/layout/layout";
import Link from "antd/es/typography/Link";
import Title from "antd/es/typography/Title";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoFacebook, IoLogoTiktok, IoLogoYoutube, IoLogoInstagram } from "react-icons/io5";
const { Text } = Typography;
const { useBreakpoint } = Grid;

const Footers = () => {
  const { xs } = useBreakpoint();
  const fontSizeTitle = xs
    ? {
        fontSize: "16px",
        letterSpacing: "2px",
      }
    : {
        fontSize: "18px",
        letterSpacing: "3px",
      };

  const fontSizeText = xs
    ? {
        fontSize: "12px",
      }
    : {
        fontSize: "14px",
      };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: "#fff",
          colorPrimary: "#13629e",
          motionDurationSlow: "1s",
        },
        components: {
          Typography: {
            colorLink: "white",
            colorLinkHover: "#13629e",
          },
        },
      }}
    >
      <Footer>
        <Row gutter={[0, 30]}>
          <Col
            xs={{
              span: 22,
              offset: 1,
            }}
            sm={{
              span: 22,
              offset: 1,
            }}
            md={{
              span: 12,
              offset: 2,
            }}
            lg={{
              span: 14,
              offset: 2,
            }}
            xl={{
              span: 14,
              offset: 2,
            }}
            xxl={{
              span: 14,
              offset: 2,
            }}
          >
            <Space>
              <Link href="http://www.youtube.com/@NitroBoost-us9zk" target="_blank">
                <IoLogoYoutube size={26} />
              </Link>
              <Link href="https://instagram.com/nitro_officialjkt?utm_source=qr" target="_blank">
                <IoLogoInstagram size={26} />
              </Link>
              <Link href="" target="_blank">
                <IoLogoFacebook size={26} />
              </Link>
              <Link href="https://www.tiktok.com/@nitro_offialjkt?_t=8hSmEgVKUGQ&_r=1" target="_blank">
                <IoLogoTiktok size={26} />
              </Link>
            </Space>
          </Col>
          <Col
            xs={{
              span: 22,
              offset: 1,
            }}
            sm={{
              span: 22,
              offset: 1,
            }}
            md={{
              span: 8,
            }}
            lg={{
              span: 6,
            }}
            xl={{
              span: 6,
            }}
            xxl={{
              span: 6,
            }}
          >
            <Space direction="vertical">
              <Link href="" target="_blank" style={fontSizeText}>
                Tentang Kami
              </Link>
              <Link href="" target="_blank" style={fontSizeText}>
                Fasilitas
              </Link>
              <Link href="" target="_blank" style={fontSizeText}>
                Galeri
              </Link>
            </Space>
          </Col>
          <Col
            xs={{
              span: 22,
              offset: 1,
            }}
            sm={{
              span: 22,
              offset: 1,
            }}
            md={{
              span: 12,
              offset: 2,
            }}
            lg={{
              span: 14,
              offset: 2,
            }}
            xl={{
              span: 14,
              offset: 2,
            }}
            xxl={{
              span: 14,
              offset: 2,
            }}
          >
            <Space direction="vertical">
              <Title level={5} style={fontSizeTitle}>
                Jakarta
              </Title>
              <Text style={fontSizeText}>
                Menara Standard Chartered Lt. 18
                <br />
                Jl. Prof Dr. Satrio No. 164
                <br />
                Jakarta Selatan 12930
              </Text>
            </Space>
          </Col>
          <Col
            xs={{
              span: 15,
              offset: 1,
            }}
            sm={{
              span: 10,
              offset: 1,
            }}
            md={{
              span: 6,
            }}
            lg={{
              span: 5,
            }}
            xl={{
              span: 4,
            }}
            xxl={{
              span: 2,
            }}
          >
            <Space direction="vertical" style={{ width: "100%" }}>
              <Title level={5} style={fontSizeTitle}>
                Chat Support
              </Title>
              <Link
                href="https://wa.me/message/Y2SKK6PXXHDME1"
                target="_blank"
                style={{ backgroundColor: "#00b451", padding: "5px 0px 2px 10px", width: "95%", borderRadius: 5, display: "flex", gap: 5, alignItems: "center", fontSize: fontSizeText.fontSize }}
              >
                <FaWhatsapp size={22} />
                <span>WA +62 811-145-377</span>
              </Link>
            </Space>
          </Col>
          <Col
            xxl={{
              span: 14,
              offset: 2,
            }}
            xl={{
              span: 14,
              offset: 2,
            }}
            lg={{
              span: 14,
              offset: 2,
            }}
            md={{
              span: 14,
              offset: 2,
            }}
            sm={{
              span: 14,
              offset: 1,
            }}
            xs={{
              span: 22,
              offset: 1,
            }}
          >
            <Space direction="vertical" size={"small"}>
              <Space size={"large"}>
                <Title level={5} style={fontSizeTitle}>
                  Syarat dan Ketentuan
                </Title>
                <Divider style={{ width: 2, height: 20, backgroundColor: "white", marginTop: 20 }} />
                <Title level={5} style={fontSizeTitle}>
                  Privacy Policy
                </Title>
              </Space>

              <Text style={fontSizeText}>
                <b>Disclaimer : </b>Seluruh konten didalam website ini hanya bersifat informatif. PT. NitroBoost tidak menjamin kelengkapan dan akurasinya. PT. NitroBoost tidak bertanggung jawab atas segala bentuk kerugian, baik langsung
                maupun tidak langsung, akibat penggunaan informasi yang tersedia di website ini.
              </Text>
              <Text style={fontSizeText}>
                <b>Kebijakan Privasi : </b>PT. NitroBoost membutuhkan informasi pribadi bagi pihak yang melakukan pendaftaran untuk kepentingan internal. PT. NitroBoost dan karyawannya berkewajiban menjaga kerahasiaan informasi tersebut dan
                tidak akan memberikannya kepada pihak ketiga. Namun jika diwajibkan oleh undang-undang, PT. NitroBoost dapat memberikan informasi tersebut ke otoritas publik.
              </Text>
            </Space>
          </Col>
        </Row>
      </Footer>
    </ConfigProvider>
  );
};

export default Footers;
