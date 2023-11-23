import { Button, Col, Form, Grid, Input, Row, message } from "antd";
import backgroundJoinUs from "../assets/images/background/background-join-us.png";
import backgroundJoinUsMobile from "../assets/images/background/background-join-us-mobile.png";

const CardJoinUs = () => {
  const { xs } = Grid.useBreakpoint();
  const backgroundImage = xs ? backgroundJoinUsMobile : backgroundJoinUs;
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const validateMessages = {
    required: "Silahkan masukkan ${label} anda  ",
    types: {
      email: "Format ${label} tidak sesuai",
      url: "Format ${label} tidak sesuai",
    },
    string: {
      max: "${label} tidak boleh lebih dari 13 digit",
    },
  };

  const onFinish = (val) => {
    const phoneNumber = val.No_Handphone.substring(0, 4) + "-" + val.No_Handphone.substring(4, 8) + "-" + val.No_Handphone.substring(8, val.No_Handphone.length);

    try {
      fetch("https://sheetdb.io/api/v1/b97ftmjkho2ja", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              Nama: val.name,
              Email: val.email,
              No_Handphone: phoneNumber,
              Kode_Referral: val.Kode_Referral,
            },
          ],
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.created !== undefined) {
            form.resetFields();
            messageApi.open({
              type: "success",
              content: <span style={{ paddingTop: 100, position: "relative", top: 2, left: 0 }}>Registrasi Berhasil</span>,
              className: "custom-class",
              style: {
                marginTop: "30vh",
              },
            });
          } else {
            console.log("Registrasi Gagal");
            messageApi.open({
              type: "error",
              content: <span style={{ paddingTop: 100, position: "relative", top: 2, left: 0 }}>Registrasi Gagal</span>,
              className: "custom-class",
              style: {
                marginTop: "30vh",
              },
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      id="join-us"
      style={{
        paddingTop: 50,
        backgroundPosition: "center",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <Row justify={"center"}>
        <Col xs={22} sm={22} md={18} lg={12} xl={12}>
          <h2 style={{ textAlign: "center", color: "white" }}>
            Bergabung dengan Kami
            <br /> dan Jadilah Trader Terbaik
          </h2>
        </Col>
      </Row>
      <Row justify={"center"} style={{ marginTop: 25 }}>
        <Col xs={20} sm={20} md={16} lg={14} xl={13}>
          {contextHolder}
          <Form form={form} name="join-us" layout="vertical" validateMessages={validateMessages} onFinish={(e) => onFinish(e)}>
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
                {
                  max: 13,
                },
              ]}
            >
              <Input type="number" placeholder="Masukkan no. handphone" />
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

export default CardJoinUs;
