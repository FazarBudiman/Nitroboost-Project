import { Button, Col, Flex, Row, Typography } from "antd";
import backgroundHero from "../assets/images/background/background-hero.png";
import tagline from "../assets/images/tagline.png";
const { Text } = Typography;

const Hero = () => {
  return (
    <Row style={{ padding: "125px 0px 0px", backgroundImage: `url(${backgroundHero})`, backgroundPosition: "top", backgroundSize: "100%", backgroundRepeat: "no-repeat" }}>
      <Col offset={2} xs={20} sm={20} md={14} lg={14} xl={12} xxl={12}>
        <Flex vertical>
          <img src={tagline} width={"100%"} />
          <Text style={{ fontSize: 18, margin: "10px 0px 40px", color: "black" }}>
            Komunitas berisikan traders berpengalaman, yang akan menemani dan membimbing anda untuk menemukan pola serta cara yang tepat sesuai keinginan dan keadaan anda dalam bertrading untuk tetap terus merasakan profit konsisten.
          </Text>
          <Col span={1}>
            <Button type="primary" style={{ borderRadius: 8, letterSpacing: 2, fontSize: 14 }}>
              join with us
            </Button>
          </Col>
        </Flex>
      </Col>
    </Row>
  );
};

export default Hero;
