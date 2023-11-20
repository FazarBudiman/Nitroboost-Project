import { Button, Col, Drawer, Grid, Menu, Row } from "antd";
import { Header } from "antd/es/layout/layout";
import logoNitroboost from "../assets/images/logo-nitroboost.png";
import { useState } from "react";
import Link from "antd/es/typography/Link";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
const { useBreakpoint } = Grid;

const itemsMenu = [
  {
    key: "tentangKami",
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
    key: "daftar",
    label: (
      <div style={{ backgroundColor: "#13629e", color: "white", padding: "0px 20px" }}>
        <Link>Daftar</Link>
        <span style={{ height: "2.5px", width: "37px", position: "absolute", top: 50, left: 36, backgroundColor: "white" }}></span>
      </div>
    ),
  },
];

const Headers = () => {
  const { xs, sm, md } = useBreakpoint();
  const [current, setCurrent] = useState("");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Header style={{ borderBottom: "3px solid #13629e" }}>
      <Row align={"middle"}>
        <Col xs={16} sm={16} md={11} lg={14} xl={17} xxl={20} style={{ display: "flex", alignItems: "center" }}>
          <img src={logoNitroboost} width={250} style={{ maxWidth: "70%", height: "auto" }} alt="logo-nitroboost" />
        </Col>
        <Col xs={8} sm={8} md={6} lg={8} xl={6} xxl={4}>
          {(xs && !md) || (sm && !md) ? (
            <FaBars size={24} style={{ position: "relative", top: 9, left: "90%" }} onClick={showDrawer} />
          ) : (
            <Menu mode="horizontal" onClick={onClick} selectedKeys={[current]} style={{ minWidth: 400 }} items={itemsMenu} />
          )}
        </Col>
      </Row>

      <Drawer title={<img src={logoNitroboost} width={200} />} placement={"top"} size="large" width={"100vw"} height={"100vh"} onClose={onClose} closable={false} open={open} extra={<RxCross2 size={24} onClick={onClose} />}>
        <Row gutter={[0, 20]}>
          <Col span={22}>
            <Link href="" target="_blank">
              Tentang Kami
            </Link>
          </Col>
          <Col span={22}>
            <Link href="" target="_blank">
              Layanan
            </Link>
          </Col>
          <Col span={22}>
            <Link href="" target="_blank">
              Galeri
            </Link>
          </Col>
          <Col span={22}>
            <Button type="primary" style={{ width: "100%" }}>
              Daftar
            </Button>
          </Col>
        </Row>
      </Drawer>
    </Header>
  );
};

export default Headers;
