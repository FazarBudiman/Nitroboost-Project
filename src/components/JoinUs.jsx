import { Button, Col, Form, Input, InputNumber, Row } from "antd";
import backgroundJoinUs from "../assets/images/background/background-join-us.png";

const JoinUs = () => {
  const validateMessages = {
    required: "Silahkan masukkan ${label} anda  ",
    types: {
      email: "Format ${label} tidak sesuai",
      url: "Format ${label} tidak sesuai",
    },
  };
  const onFinish = (val) => {
    console.log(val);
  };

  return (
    <div
      id="join-us"
      style={{
        marginTop: 120,
        paddingTop: 50,
        backgroundPosition: "center",
        backgroundImage: `url(${backgroundJoinUs})`,
        backgroundSize: "cover",
      }}
    >
      <Row justify={"center"}>
        <Col xs={22} sm={22} md={18} lg={12} xl={12}>
          <h2 style={{ textAlign: "center", letterSpacing: 6, color: "white" }}>
            Bergabung dengan Kami
            <br /> dan Jadilah Trader Terbaik
          </h2>
        </Col>
      </Row>
      <Row justify={"center"} style={{ marginTop: 25 }}>
        <Col xs={20} sm={20} md={16} lg={14} xl={13}>
          <Form name="join-us" layout="vertical" validateMessages={validateMessages} onFinish={(e) => onFinish(e)}>
            <Form.Item
              name="name"
              required
              label="Nama"
              style={{ letterSpacing: 2, fontWeight: 600 }}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Masukkan nama" />
            </Form.Item>
            <Form.Item
              name="email"
              required
              label="Email"
              style={{ letterSpacing: 2, fontWeight: 600 }}
              rules={[
                {
                  required: true,
                },
                {
                  type: "email",
                },
              ]}
            >
              <Input placeholder="Masukkan email" />
            </Form.Item>
            <Form.Item
              name="No_Handphone"
              required
              label="No. Handphone"
              style={{ letterSpacing: 2, fontWeight: 600 }}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <InputNumber placeholder="Masukkan no. handphone" size="large" style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              name="Kode_Referral"
              label="Kode Referral"
              style={{ letterSpacing: 2, fontWeight: 600 }}
              tooltip={{
                icon: <span style={{ fontSize: 12, marginLeft: 10, color: "#e0dede" }}>(Optional)</span>,
              }}
              rules={[{ type: "url" }]}
            >
              <Input placeholder="Masukkan kode referral" />
            </Form.Item>
            <Form.Item style={{ marginTop: 20, textAlign: "center" }}>
              <Button htmlType="submit" type="primary" style={{ letterSpacing: 2, backgroundColor: "white", color: "#13629e", fontWeight: 600 }}>
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
