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
      <div className="card-menu-item-daftar">
        <Link className="menu-item-daftar">Daftar</Link>
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
    <Header className="headers">
      <Row align={"middle"}>
        <Col className="card-logo" xs={{ offset: 1, span: 16 }} sm={{ offset: 1, span: 10 }} md={{ offset: 1, span: 10 }} lg={{ offset: 2, span: 12 }} xl={{ offset: 2, span: 14 }}>
          <img src={logoNitroboost} alt="logo-nitroboost" />
        </Col>
        <Col xs={4} sm={12} md={6} lg={6} xl={4}>
          {(xs && !md) || (sm && !md) || (!xs && !sm && !md) ? (
            <FaBars className="icon-hamburger-menu" size={22} onClick={showDrawer} />
          ) : (
            <Menu className="list-menu" mode="horizontal" onClick={(e) => onClickMenu(e.key)} items={itemsMenu} />
          )}
        </Col>
      </Row>

      <Drawer
        className="drawer-menu"
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
          <Col span={24} className="drawer-menu-close">
            <IoClose size={26} onClick={onClose} />
          </Col>
          <Col span={24} className="drawer-menu-logo">
            <img src={logoNitroboost} />
          </Col>
          <Col span={24} className="drawer-menu">
            <Link to="/tentang-kami">Tentang Kami</Link>
          </Col>
          <Col span={24} className="drawer-menu">
            <Link to="/fasilitas">Fasilitas</Link>
          </Col>
          <Col span={24} className="drawer-menu">
            <Link to="/galeri">Galeri</Link>
          </Col>
          <Col span={20} offset={2}>
            <Link to="/join-us">
              <Button className="button-menu-item" type="primary" size="middle">
                Daftar
              </Button>
            </Link>
          </Col>
          <Col span={24} className="disclaimer-card">
            <p>
              <strong>Disclaimer</strong>
              <br />
              <p>
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
