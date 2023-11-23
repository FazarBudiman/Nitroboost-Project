import { ConfigProvider, Grid } from "antd";
import "./App.css";
import "../src/assets/styles/font.css";
import Home from "./pages/Home";
import "@fontsource/titillium-web/200.css";
import "@fontsource/titillium-web/300.css";
import "@fontsource/titillium-web/400.css";
import "@fontsource/titillium-web/600.css";
import "@fontsource/titillium-web/700.css";
import "@fontsource/titillium-web/900.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Galeri from "./pages/Galeri";
import Fasilitas from "./pages/Fasilitas";
import JoinUs from "./pages/JoinUs";
import Router from "./router/Router";

function App() {
  const { xs } = Grid.useBreakpoint();
  const paddingBlock = xs ? 4 : 7;
  const labelFontSize = xs ? 14 : 16;
  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: "#13629e",
          colorLink: "#13629e",
          colorPrimary: "#13629e",
          motionDurationSlow: "1s",
          colorError: "#ff0000",
        },
        components: {
          Layout: {
            headerBg: "#fff",
            headerHeight: 100,
            footerBg: "#0d1b30",
            footerPadding: "50px 0px 90px",
            headerPadding: "0px 0px",
          },
          Button: {
            contentFontSize: 16,
            contentFontSizeLG: 18,
            contentFontSizeSM: 16,
          },
          Menu: {
            itemColor: "#13629e",
            itemHoverColor: "black",
            horizontalItemSelectedColor: "#13629e",
            activeBarHeight: 3,
          },
          Form: {
            labelColor: "#fff",
            labelFontSize: labelFontSize,
            verticalLabelPadding: "1px 0px",
          },
          Input: {
            paddingBlock: paddingBlock,
          },
        },
      }}
    >
      <Router />
    </ConfigProvider>
  );
}

export default App;
