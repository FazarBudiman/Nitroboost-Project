import { Button, Col, Flex, Row } from "antd";
import backgroundHero from "../assets/images/background/background-hero.png";
import tagline from "../assets/images/tagline.png";

const Hero = () => {
  return (
    <Row style={{ padding: "125px 0px 0px 50px", backgroundImage: `url(${backgroundHero})`, backgroundPosition: "top", backgroundSize: "100%", backgroundRepeat: "no-repeat" }}>
      <Col xs={18} sm={{ offset: 1, span: 12 }} md={{ offset: 1, span: 11 }} lg={{ offset: 2, span: 10 }} xl={{ offset: 2, span: 9 }}>
        <Flex vertical>
          <img src={tagline} width={"100%"} />
          <p style={{ margin: "10px 0px 40px", width: "120%" }}>
            Komunitas berisikan traders berpengalaman, yang akan menemani dan membimbing anda untuk menemukan pola serta cara yang tepat sesuai keinginan dan keadaan anda dalam bertrading untuk tetap terus merasakan profit konsisten.
          </p>
          <Col span={2}>
            <Button size="large" type="primary" style={{ borderRadius: 8, letterSpacing: 2, paddingTop: "7px", fontSize: 16 }} href="#join-us">
              join with us
            </Button>
          </Col>
        </Flex>
      </Col>
    </Row>
  );
};

export default Hero;
