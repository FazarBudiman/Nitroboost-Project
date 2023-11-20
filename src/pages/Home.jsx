import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Footers from "../components/Footers";
import Headers from "../components/Headers";
import Testimoni from "../components/Testimoni";
import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import Fasilitas from "../components/Fasilitas";
import JoinUs from "../components/JoinUs";

const Home = () => {
  return (
    <Layout>
      <Headers />
      <Content>
        <Hero />
        <WhyUs />
        <Fasilitas />
        <Testimoni />
        <JoinUs />
      </Content>
      <Footers />
    </Layout>
  );
};

export default Home;
