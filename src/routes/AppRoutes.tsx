import { Route, Routes } from "react-router-dom";
import { Home } from "../layout/Home";
import { About } from "../layout/About";
import { Offers } from "../layout/Offers";
import { Gallery } from "../layout/Gallery";
import { Contact } from "../layout/Contact";

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
