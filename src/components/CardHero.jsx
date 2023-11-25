import { Button, Col, Flex, Grid, Row } from "antd";
import backgroundHero from "../assets/images/background/background-hero.png";
import backgroundHeroMobile from "../assets/images/background/background-hero-mobile.png";
import taglineNoMobile from "../assets/images/tagline.png";
import taglineMobile from "../assets/images/tagline-mobile.png";

const CardHero = () => {
  const { xs } = Grid.useBreakpoint();
  const tagline = xs ? taglineMobile : taglineNoMobile;
  const background = xs ? backgroundHeroMobile : backgroundHero;

  return (
    <Row className="card-hero" style={{ backgroundImage: `url(${background})`, backgroundPosition: "top", backgroundSize: "100%", backgroundRepeat: "no-repeat" }}>
      <Col xs={16} sm={{ offset: 1, span: 16 }} md={{ offset: 1, span: 14 }} lg={{ offset: 2, span: 10 }} xl={{ offset: 2, span: 9 }}>
        <Flex vertical className="content-hero">
          <img src={tagline} />
          <p>Komunitas berisikan traders berpengalaman, yang akan menemani dan membimbing anda untuk menemukan pola serta cara yang tepat sesuai keinginan dan keadaan anda dalam bertrading untuk tetap terus merasakan profit konsisten.</p>
          <Col span={2}>
            <Button size="large" type="primary" href="#join-us" className="content-hero-button">
              join with us
            </Button>
          </Col>
        </Flex>
      </Col>
    </Row>
  );
};

export default CardHero;
