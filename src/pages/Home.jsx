import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Footers from "../components/Footers";
import Headers from "../components/Headers";
import CardHero from "../components/CardHero";
import CardWhyUs from "../components/CardWhyUs";
import CardFasilitas from "../components/CardFasilitas";
import CardTestimoni from "../components/CardTestimoni";
import CardJoinUs from "../components/CardJoinUs";
import "../assets/styles/home.css";

const Home = () => {
  return (
    <Layout>
      <Headers />
      <Content>
        <CardHero />
        <CardWhyUs />
        <CardFasilitas />
        <CardTestimoni />
        <CardJoinUs />
      </Content>
      <Footers />
    </Layout>
  );
};

export default Home;
