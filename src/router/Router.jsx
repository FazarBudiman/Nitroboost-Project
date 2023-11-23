import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Fasilitas from "../pages/Fasilitas";
import Galeri from "../pages/Galeri";
import JoinUs from "../pages/JoinUs";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/tentang-kami" exact element={<Home />} />
        <Route path="/fasilitas" exact element={<Fasilitas />} />
        <Route path="/galeri" exact element={<Galeri />} />
        <Route path="/join-us" exact element={<JoinUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
