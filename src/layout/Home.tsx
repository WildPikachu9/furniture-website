import { SetStateAction, useState } from "react";
import "../App.scss";
import Carousel from "react-bootstrap/Carousel";
import { ButtonMain } from "../components/ButtonMain";
import { Link } from "react-router-dom";
import { CardSlider } from "../components/CardSlider";
import { offersDataHomePage } from "../furnitureData/OffersDataHomePage";
import { blogDataHomePage } from "../furnitureData/BlogDataHomePage";
import { Footer } from "../components/Footer";

export const HomeCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: SetStateAction<number>) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} fade>
      <Carousel.Item>
        <div
          className='d-block w-100 carousel-img'
          style={{ backgroundImage: "url(/img/img1.jpg)" }}
        ></div>
        <Carousel.Caption className='carousel-desc'>
          <h1 className='carousel-text'>meble na wymiar</h1>
          <ButtonMain>
            <Link to='/oferta'>czytaj więcej</Link>
          </ButtonMain>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className='d-block w-100 carousel-img'
          style={{ backgroundImage: "url(/img/img2.jpg)" }}
        ></div>
        <Carousel.Caption className='carousel-desc'>
          <h1 className='carousel-text'>wystrój wnętrza</h1>
          <ButtonMain>
            <Link to='/oferta'>czytaj więcej</Link>
          </ButtonMain>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export const Home = () => {
  return (
    <div className='home-layout-container'>
      <HomeCarousel />
      <section className='offers-component-container'>
        <h2 className='main-title'>nasza oferta</h2>
        <CardSlider data={offersDataHomePage} />
      </section>
      <section className='about-component-container'>
        <div className='img-about-container carousel-img'>
          <h1 className='logo'>arsmeble.</h1>
          <h2 className='main-title'>dowiedz się więcej o naszej firmie</h2>
          <ButtonMain>
            <Link to='/o-nas'>czytaj więcej</Link>
          </ButtonMain>
        </div>
      </section>
      <section className='blog-component-container'>
        <h2 className='main-title'>nasz blog</h2>
        <CardSlider data={blogDataHomePage} />
      </section>
      <Footer />
    </div>
  );
};
