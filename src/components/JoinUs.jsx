import { Button, Col, Form, Input, Row } from "antd";
import Title from "antd/es/typography/Title";
import backgroundJoinUs from "../assets/images/background/background-join-us.png";

const JoinUs = () => {
  return (
    <div
      style={{
        marginTop: 120,
        paddingTop: 60,
        backgroundPosition: "center",
        backgroundImage: `url(${backgroundJoinUs})`,
        backgroundSize: "cover",
      }}
    >
      <Row justify={"center"}>
        <Col xs={20} sm={20} md={14} lg={12} xl={8} xxl={8}>
          <Title level={3} style={{ textAlign: "center", letterSpacing: 6, color: "white" }}>
            Bergabung dengan Kami dan Jadilah Trader Terbaik
          </Title>
        </Col>
      </Row>
      <Row justify={"center"} style={{ marginTop: 25 }}>
        <Col xs={20} sm={20} md={16} lg={14} xl={10} xxl={10}>
          <Form layout="vertical" style={{ textAlign: "center" }}>
            <Form.Item label="Nama" style={{ letterSpacing: 2, fontWeight: 600 }}>
              <Input placeholder="Masukkan nama" />
            </Form.Item>
            <Form.Item label="Email" style={{ letterSpacing: 2, fontWeight: 600 }}>
              <Input placeholder="Masukkan email" />
            </Form.Item>
            <Form.Item label="No. Handphone" style={{ letterSpacing: 2, fontWeight: 600 }}>
              <Input placeholder="Masukkan no. handphone" />
            </Form.Item>
            <Form.Item label="Kode Referral" style={{ letterSpacing: 2, fontWeight: 600 }}>
              <Input placeholder="Masukkan kode referral" />
            </Form.Item>
            <Form.Item style={{ marginTop: 40 }}>
              <Button type="primary" style={{ letterSpacing: 2, backgroundColor: "white", color: "#13629e", fontWeight: 600 }}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default JoinUs;
