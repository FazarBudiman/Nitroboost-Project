import { ConfigProvider } from "antd";
import "./App.css";
import Home from "./pages/Home";
import "@fontsource/titillium-web";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "'Titillium Web'",
          colorText: "#13629e",
          colorPrimary: "#13629e",
          motionDurationSlow: "1s",
          fontSize: 16,
          fontSizeHeading5: 18,
          fontSizeHeading4: 22,
          fontSizeHeading3: 26,
          fontSizeHeading2: 32,
          fontSizeHeading1: 40,
          fontSizeXL: 22,
          fontSizeLG: 18,
          fontSizeSM: 14,
          fontWeightStrong: 700,
        },
        components: {
          Layout: {
            headerBg: "#fff",
            headerHeight: 80,
            headerPadding: "0px 50px 80px",
            footerBg: "#0d1b30",
            footerPadding: "50px 0px 90px",
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
            labelFontSize: 16,
            verticalLabelPadding: "1px 0px",
          },
          Input: {
            paddingBlock: 7,
          },
        },
      }}
    >
      <Home />
    </ConfigProvider>
  );
}

export default App;
