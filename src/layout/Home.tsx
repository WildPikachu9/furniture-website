import { SetStateAction, useState } from "react";
import "../App.scss";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

export const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: SetStateAction<number>) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='home-container'>
      <Carousel activeIndex={index} onSelect={handleSelect} fade>
        <Carousel.Item>
          <div
            className='d-block w-100 carousel-img'
            style={{ backgroundImage: "url(/img/img1.jpg)" }}
          ></div>
          <Carousel.Caption className='carousel-desc'>
            <h1 className='carousel-text'>meble na wymiar</h1>
            <Button>
              <Link to='/oferta'>czytaj więcej</Link>
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className='d-block w-100 carousel-img'
            style={{ backgroundImage: "url(/img/img2.jpg)" }}
          ></div>
          <Carousel.Caption className='carousel-desc'>
            <h1 className='carousel-text'>wystrój wnętrza</h1>
            <Button>
              <Link to='/oferta'>czytaj więcej</Link>
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
