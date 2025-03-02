import { Routes, Route } from "react-router-dom";
import { Home, AboutUs, Rooms, Dining, Banquet, OtherFacilities, Gallery, GetInTouch, ErrorPage } from "./index";
import Layout from "../components/Layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="dining" element={<Dining />} />
        <Route path="banquet" element={<Banquet />} />
        <Route path="otherfacilities" element={<OtherFacilities />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="getintouch" element={<GetInTouch />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
