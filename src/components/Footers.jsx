import { Col, ConfigProvider, Divider, Row, Space, Typography } from "antd";
import { Footer } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoFacebook, IoLogoTiktok, IoLogoYoutube, IoLogoInstagram } from "react-icons/io5";
import { Link } from "react-router-dom";
const { Text } = Typography;
import "../assets/styles/footer.css";

const Footers = () => {
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
          >
            <Space>
              <a href="http://www.youtube.com/@NitroBoost-us9zk" target="_blank" rel="noreferrer">
                <IoLogoYoutube size={26} />
              </a>
              <a href="https://instagram.com/nitro_officialjkt?utm_source=qr" target="_blank" rel="noreferrer">
                <IoLogoInstagram size={26} />
              </a>
              <a href="" target="_blank" rel="noreferrer">
                <IoLogoFacebook size={26} />
              </a>
              <a href="https://www.tiktok.com/@nitro_offialjkt?_t=8hSmEgVKUGQ&_r=1" target="_blank" rel="noreferrer">
                <IoLogoTiktok size={26} />
              </a>
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
          >
            <Space direction="vertical">
              <Link to="/tentang-kami" className="footer-menu-item">
                Tentang Kami
              </Link>
              <Link to="/fasilitas" className="footer-menu-item">
                Fasilitas
              </Link>
              <Link to="/galeri" className="footer-menu-item">
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
          >
            <Space direction="vertical">
              <Title level={5}>
                <span className="lokasi-title">Jakarta</span>
              </Title>
              <Text className="lokasi-detail">
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
              span: 7,
            }}
            lg={{
              span: 6,
            }}
            xl={{
              span: 5,
            }}
          >
            <Space className="card-kontak" direction="vertical">
              <Title level={5}>
                <span className="title-kontak">Chat Support</span>
              </Title>
              <a className="detail-kontak" href="https://wa.me/message/Y2SKK6PXXHDME1" target="_blank" rel="noreferrer">
                <FaWhatsapp size={22} />
                <span>WA +62 811-145-377</span>
              </a>
            </Space>
          </Col>
          <Col
            xs={{
              span: 22,
              offset: 1,
            }}
            sm={{
              span: 20,
              offset: 1,
            }}
            md={{
              span: 16,
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
          >
            <Space direction="vertical" size={"small"}>
              <Space size={"large"}>
                <Title level={5}>
                  <span className="term-condition-title">Syarat dan Ketentuan</span>
                </Title>
                <Divider className="batas-putih" />
                <Title level={5}>
                  <span className="term-condition-title">Privacy Policy</span>
                </Title>
              </Space>

              <Text className="term-condition-content">
                <b>Disclaimer : </b>Seluruh konten didalam website ini hanya bersifat informatif. Pihak NitroBoost tidak menjamin kelengkapan dan akurasinya. Pihak NitroBoost tidak bertanggung jawab atas segala bentuk kerugian, baik
                langsung maupun tidak langsung, akibat penggunaan informasi yang tersedia di website ini.
              </Text>
              <Text className="term-condition-content">
                <b>Kebijakan Privasi : </b>Pihak NitroBoost membutuhkan informasi pribadi bagi pihak yang melakukan pendaftaran untuk kepentingan internal. Pihak NitroBoost dan karyawannya berkewajiban menjaga kerahasiaan informasi tersebut
                dan tidak akan memberikannya kepada pihak ketiga. Namun jika diwajibkan oleh undang-undang, Pihak NitroBoost dapat memberikan informasi tersebut ke otoritas publik.
              </Text>
            </Space>
          </Col>
        </Row>
      </Footer>
    </ConfigProvider>
  );
};

export default Footers;
