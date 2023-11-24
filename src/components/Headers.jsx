import { Button, Col, Drawer, Grid, Menu, Row } from "antd";
import { Header } from "antd/es/layout/layout";
import logoNitroboost from "../assets/images/logo-nitroboost.png";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
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
            <FaBars size={24} style={{ position: "relative", top: 9, left: "90%" }} onClick={showDrawer} />
          ) : (
            <Menu mode="horizontal" onClick={(e) => onClickMenu(e.key)} style={{ minWidth: 400, height: 98, fontSize: "12pt" }} items={itemsMenu} />
          )}
        </Col>
      </Row>

      <Drawer
        title={<img src={logoNitroboost} width={200} style={{ paddingTop: 5 }} />}
        placement={"top"}
        size="large"
        width={"100vw"}
        height={"100vh"}
        onClose={onClose}
        closable={false}
        open={open}
        extra={<RxCross2 size={24} onClick={onClose} />}
      >
        <Row gutter={[0, 20]}>
          <Col span={20} offset={2}>
            <Link to="/tentang-kami" style={{ color: "#13629e" }}>
              Tentang Kami
            </Link>
          </Col>
          <Col span={20} offset={2}>
            <Link to="/fasilitas" style={{ color: "#13629e" }}>
              Fasilitas
            </Link>
          </Col>
          <Col span={20} offset={2}>
            <Link to="/galeri" style={{ color: "#13629e" }}>
              Galeri
            </Link>
          </Col>
          <Col span={20} offset={2}>
            <Link to="/join-us">
              <Button type="primary" size="middle" style={{ width: "100%" }}>
                Daftar
              </Button>
            </Link>
          </Col>
        </Row>
      </Drawer>
    </Header>
  );
};

export default Headers;
