import "../../i18next";
import { useTranslation } from "react-i18next";
import { SetStateAction, useState } from "react";
import "../../index.scss";
import Carousel from "react-bootstrap/Carousel";
import { ButtonMain } from "../components/ButtonMain";
import { Link } from "react-router-dom";
import { CardSlider } from "../components/CardSlider";
import { OffersDataHomePage } from "../../furnitureData/OffersDataHomePage";
import { BlogDataHomePage } from "../../furnitureData/BlogDataHomePage";
import { Footer } from "../components/footer/Footer";
import { MetaData } from "../components/metaData/MetaData";

export const HomeCarousel = () => {
  const [index, setIndex] = useState(0);
  const { t } = useTranslation();

  const handleSelect = (selectedIndex: SetStateAction<number>) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} fade>
      <Carousel.Item>
        <div className='d-block w-100 carousel-img carousel-img-first'></div>
        <Carousel.Caption className='carousel-desc'>
          <h1 className='carousel-text'>
            {t("general.headersHome.bannerText1")}
          </h1>
          <ButtonMain>
            <Link to='/oferta'>{t("general.readMore")}</Link>
          </ButtonMain>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='d-block w-100 carousel-img carousel-img-second'></div>
        <Carousel.Caption className='carousel-desc'>
          <h1 className='carousel-text'>
            {t("general.headersHome.bannerText2")}
          </h1>
          <ButtonMain>
            <Link to='/oferta'>{t("general.readMore")}</Link>
          </ButtonMain>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export const Home = () => {
  const { t } = useTranslation();
  const blogs = BlogDataHomePage();
  const offers = OffersDataHomePage();

  return (
    <div className='home-layout-container'>
      <MetaData metaDesc={t("metaData.descriptionHome")} />
      <HomeCarousel />
      <section className='offers-component-container'>
        <h2 className='main-title'>{t("general.headersHome.offersSection")}</h2>
        <CardSlider data={offers} />
      </section>
      <section className='about-component-container'>
        <div className='img-about-container carousel-img'>
          <h1 className='logo'>arsmeble.</h1>
          <h2 className='main-title'>
            {t("general.headersHome.aboutSection")}
          </h2>
          <ButtonMain>
            <Link to='/o-nas'>{t("general.readMore")}</Link>
          </ButtonMain>
        </div>
      </section>
      <section className='blog-component-container'>
        <h2 className='main-title'>{t("general.headersHome.blogSection")}</h2>
        <CardSlider data={blogs} />
      </section>
      <Footer />
    </div>
  );
};
