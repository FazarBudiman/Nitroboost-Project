import { Button, Col, Drawer, Grid, Menu, Row } from "antd";
import { Header } from "antd/es/layout/layout";
import logoNitroboost from "../assets/images/logo-nitroboost.png";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
const { useBreakpoint } = Grid;
import "../assets/styles/header.css";
import { Link, useNavigate } from "react-router-dom";

const itemsMenu = [
  {
    key: "tentang-kami",
    label: "Tentang Kami",
  },
  {
    key: "fasilitas",
    label: "Fasilitas",
  },
  {
    key: "galeri",
    label: "Galeri",
  },
  {
    key: "join-us",
    label: (
      <div className="menu-daftar">
        <Link style={{ borderBottom: "2.5px solid white" }}>Daftar</Link>
      </div>
    ),
  },
];

const Headers = () => {
  const { xs, sm, md } = useBreakpoint();
  const navigate = useNavigate();

  const onClickMenu = (e) => {
    setTimeout(() => {
      navigate(`/${e}`);
    }, 2000);
  };

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Header style={{ borderBottom: "2px solid #13629e" }}>
      <Row align={"middle"}>
        <Col xs={{ offset: 1, span: 16 }} sm={{ offset: 1, span: 10 }} md={{ offset: 1, span: 10 }} lg={{ offset: 2, span: 12 }} xl={{ offset: 2, span: 14 }} style={{ display: "flex", alignItems: "center" }}>
          <img src={logoNitroboost} width={250} style={{ maxWidth: "70%", height: "auto" }} alt="logo-nitroboost" />
        </Col>
        <Col xs={4} sm={12} md={6} lg={6} xl={4}>
          {(xs && !md) || (sm && !md) || (!xs && !sm && !md) ? (
            <FaBars size={22} style={{ position: "relative", top: 9, left: "90%" }} onClick={showDrawer} />
          ) : (
            <Menu mode="horizontal" onClick={(e) => onClickMenu(e.key)} style={{ minWidth: 400, height: 98, fontSize: "12pt" }} items={itemsMenu} />
          )}
        </Col>
      </Row>

      <Drawer
        styles={{
          header: {
            border: "0px",
          },
        }}
        placement={"top"}
        size="large"
        width={"100vw"}
        height={"100vh"}
        onClose={onClose}
        closable={false}
        open={open}
      >
        <Row gutter={[0, 20]}>
          <Col offset={1} span={22} style={{ textAlign: "right" }}>
            <IoClose size={26} onClick={onClose} style={{ color: "#13629e" }} />
          </Col>
          <Col span={22} style={{ margin: "-10px 0px 0px" }}>
            <img src={logoNitroboost} width={200} />
          </Col>
          <Col span={22} offset={1} style={{ borderBottom: "1px solid #13629e", padding: "0px 0px 10px 20px" }}>
            <Link to="/tentang-kami" style={{ color: "#13629e" }}>
              Tentang Kami
            </Link>
          </Col>
          <Col span={22} offset={1} style={{ borderBottom: "1px solid #13629e", padding: "0px 0px 10px 20px" }}>
            <Link to="/fasilitas" style={{ color: "#13629e" }}>
              Fasilitas
            </Link>
          </Col>
          <Col span={22} offset={1} style={{ borderBottom: "1px solid #13629e", padding: "0px 0px 10px 20px" }}>
            <Link to="/galeri" style={{ color: "#13629e" }}>
              Galeri
            </Link>
          </Col>
          <Col span={18} offset={3}>
            <Link to="/join-us">
              <Button type="primary" size="middle" style={{ width: "100%", margin: "15px 0px 25px" }}>
                Daftar
              </Button>
            </Link>
          </Col>
          <Col span={24} style={{ border: "1px solid black", padding: "10px", color: "#13629e" }}>
            <p style={{ textAlign: "center" }}>
              <strong>Disclaimer</strong>
              <br />
              <p style={{ textAlign: "justify", fontSize: "10pt", marginTop: "3px" }}>
                Seberapapun hasil portofolio orang lain atau sekuat apapun trading seseorang yang diikuti. Trading itu sendiri, kembali kepada pemahaman pemain/user terhadap manajemen resiko dan manajemen keuangan yang baik, serta
                psikologis trading dalam menentukan rencana trading itu sendiri.
              </p>
            </p>
          </Col>
        </Row>
      </Drawer>
    </Header>
  );
};

export default Headers;
