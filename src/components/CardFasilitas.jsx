import { Col, Flex, Grid, Row } from "antd";
import daftarFasilitas from "../assets/data/daftarFasilitas";
const { useBreakpoint } = Grid;

const CardFasilitas = () => {
  const { xs } = useBreakpoint();
  const heightImg = xs ? "150px" : "200px";

  const cardElement = xs
    ? {
        marginTop: "70px",
      }
    : {
        marginTop: "120px",
      };
  return (
    <div style={cardElement}>
      <Row align={"middle"} justify={"center"}>
        <h1>OUR FACILITIES</h1>
      </Row>
      <Row align={"middle"} justify={"center"} style={{ marginTop: "40px" }} gutter={[0, 30]}>
        {daftarFasilitas.map((val) => {
          return (
            <Col xs={16} sm={16} md={10} lg={10} xl={{ span: 5 }} key={val.id}>
              <Flex vertical align="center">
                <h2 style={{ marginBottom: "20px" }}>{val.title}</h2>
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
