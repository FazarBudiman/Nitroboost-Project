import { Col, Flex, Row } from "antd";
import daftarFasilitas from "../assets/data/daftarFasilitas";

const CardFasilitas = () => {
  return (
    <div className="card-fasilitas">
      <Row align={"middle"} justify={"center"}>
        <h1>OUR FACILITIES</h1>
      </Row>
      <Row className="content-fasilitas" align={"middle"} justify={"center"} gutter={[0, { xs: 15, sm: 10, md: 30 }]}>
        {daftarFasilitas.map((val) => {
          return (
            <Col xs={14} sm={16} md={10} lg={10} xl={{ span: 5 }} key={val.id}>
              <Flex vertical align="center">
                <h2 className="title-content-fasilitas">{val.title}</h2>
                <img className="ilustrasi-content-fasilitas" src={val.ilustrasi} />
              </Flex>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default CardFasilitas;
