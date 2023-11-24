import { Button, Col, Flex, Grid, Row } from "antd";
import backgroundHero from "../assets/images/background/background-hero.png";
import taglineNoMobile from "../assets/images/tagline.png";
import taglineMobile from "../assets/images/tagline-mobile.png";

const CardHero = () => {
  const { xs } = Grid.useBreakpoint();
  const tagline = xs ? taglineMobile : taglineNoMobile;
  const styleMobile = xs && {
    position: "relative",
    top: -30,
  };

  const paddingTop = xs ? "100px" : "120px";
  const paddingLeft = xs ? "30px" : "50px";

  return (
    <Row style={{ paddingTop: paddingTop, paddingLeft: paddingLeft, backgroundImage: `url(${backgroundHero})`, backgroundPosition: "top", backgroundSize: "100%", backgroundRepeat: "no-repeat" }} className="background-image">
      <Col xs={16} sm={{ offset: 1, span: 16 }} md={{ offset: 1, span: 14 }} lg={{ offset: 2, span: 10 }} xl={{ offset: 2, span: 9 }} style={styleMobile}>
        <Flex vertical>
          <img src={tagline} width={"100%"} />
          <p style={{ margin: "10px 0px 40px", width: "125%" }}>
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

export default CardHero;
