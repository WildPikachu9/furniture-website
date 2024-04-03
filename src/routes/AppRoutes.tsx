import { Route, Routes } from "react-router-dom";
import { Home } from "../views/layout/Home";
import { About } from "../views/layout/About";
import { Offers } from "../views/layout/Offers";
import { Gallery } from "../views/layout/Gallery";
import { Contact } from "../views/layout/Contact";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/o-nas' element={<About />} />
      <Route path='/oferta' element={<Offers />} />
      <Route path='/galeria' element={<Gallery />} />
      <Route path='/kontakt' element={<Contact />} />
    </Routes>
  );
};
