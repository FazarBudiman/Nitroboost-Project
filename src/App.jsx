import { ConfigProvider, Grid } from "antd";
import "./App.css";
import "../src/assets/styles/font.css";
import "@fontsource/titillium-web/200.css";
import "@fontsource/titillium-web/300.css";
import "@fontsource/titillium-web/400.css";
import "@fontsource/titillium-web/600.css";
import "@fontsource/titillium-web/700.css";
import "@fontsource/titillium-web/900.css";
import Router from "./router/Router";

function App() {
  const { xs } = Grid.useBreakpoint();
  const headerHeight = xs ? 80 : 100;
  const paddingBlock = xs ? 5 : 7;
  const labelFontSize = xs ? 14 : 16;
  const itemMarginBottom = xs ? 14 : 24;
  const fontSizeButton = xs ? 12 : 16;

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
            headerHeight: headerHeight,
            footerBg: "#0d1b30",
            footerPadding: "50px 0px 90px",
            headerPadding: "0px 0px",
          },
          Button: {
            contentFontSize: fontSizeButton,
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
            verticalLabelPadding: "1px 0px 0px",
            itemMarginBottom: itemMarginBottom,
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
