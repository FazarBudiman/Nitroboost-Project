import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Fasilitas from "../pages/Fasilitas";
import Galeri from "../pages/Galeri";
import JoinUs from "../pages/JoinUs";
import NotFound from "../pages/NotFound(404)";
import UnderConstruction from "../pages/UnderConstruction";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/tentang-kami" exact element={<UnderConstruction />} />
        <Route path="/fasilitas" exact element={<UnderConstruction />} />
        <Route path="/galeri" exact element={<UnderConstruction />} />
        <Route path="/join-us" exact element={<JoinUs />}>
          <Route path="/join-us/:kodeReferral" exact element={<JoinUs />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
