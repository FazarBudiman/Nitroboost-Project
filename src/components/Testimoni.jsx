/* eslint-disable react/prop-types */
import { Avatar, Col, Row } from "antd";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import dataTestimoni from "../assets/data/dataTestimoni";
import "../assets/styles/testimony.css";

const Testimoni = () => {
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style, fontSize: "3em", zIndex: 1 }} onClick={onClick}>
        <FaAngleLeft color="#13629e" />
      </div>
    );
  };
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style, fontSize: "3em", zIndex: 1, right: -5 }} onClick={onClick}>
        <FaAngleRight color="#13629e" />
      </div>
    );
  };
  const settingCarousel = {
    dots: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          speed: 500,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <Row style={{ marginTop: 130 }} justify={"center"} gutter={[0, 40]}>
      <Col span={22} style={{ textAlign: "center" }}>
        <h1>TESTIMONY</h1>
      </Col>
      <Col xs={18} sm={18} md={20} lg={20} xl={22}>
        <Slider {...settingCarousel}>
          {dataTestimoni.map((val) => {
            return (
              <div key={val.id}>
                <h3>{val.nama}</h3>
                <div className={parseInt(val.id) % 2 === 0 ? "item-carousel-style-1" : "item-carousel-style-2"}>
                  <Avatar size={130} src={val.image} />
                  <p style={{ textAlign: "left", marginTop: 20, fontSize: "12pt" }}>{val.testimoni}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </Col>
    </Row>
  );
};

export default Testimoni;
