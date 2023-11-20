/* eslint-disable react/prop-types */
import { Avatar, Col, Row } from "antd";
import Title from "antd/es/typography/Title";
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
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
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
    <div style={{ marginTop: 120 }}>
      <Row align={"middle"} justify={"center"}>
        <Title level={2} style={{ letterSpacing: 6 }}>
          TESTIMONY
        </Title>
      </Row>
      <Row align={"middle"} justify={"center"} style={{ marginTop: 25 }}>
        <Col span={20} xs={20}>
          <Slider {...settingCarousel}>
            {dataTestimoni.map((val) => {
              return (
                <div key={val.id}>
                  <Title level={4} style={{ letterSpacing: 4 }}>
                    {val.nama}
                  </Title>
                  <div className={parseInt(val.id) % 2 === 0 ? "item-carousel-style-1" : "item-carousel-style-2"}>
                    <Avatar size={100} src={val.image} />
                    <p style={{ textAlign: "justify", marginTop: 20 }}>{val.testimoni}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </Col>
      </Row>
    </div>
  );
};

export default Testimoni;
