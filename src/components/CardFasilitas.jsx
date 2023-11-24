import { Col, Flex, Grid, Row } from "antd";
import daftarFasilitas from "../assets/data/daftarFasilitas";
const { useBreakpoint } = Grid;

const CardFasilitas = () => {
  const { xs } = useBreakpoint();
  const heightImg = xs ? "120px" : "200px";

  const cardElement = xs
    ? {
        marginTop: "50px",
      }
    : {
        marginTop: "120px",
      };

  const marginTitleItem = xs ? "10px" : "40px";
  const marginIlustrasi = xs ? "0px" : "20px";
  return (
    <div style={cardElement}>
      <Row align={"middle"} justify={"center"}>
        <h1>OUR FACILITIES</h1>
      </Row>
      <Row align={"middle"} justify={"center"} style={{ marginTop: marginTitleItem }} gutter={[0, { xs: 15, sm: 10, md: 30 }]}>
        {daftarFasilitas.map((val) => {
          return (
            <Col xs={14} sm={16} md={10} lg={10} xl={{ span: 5 }} key={val.id}>
              <Flex vertical align="center">
                <h2 style={{ marginBottom: marginIlustrasi }}>{val.title}</h2>
                <img src={val.ilustrasi} height={heightImg} />
              </Flex>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default CardFasilitas;
