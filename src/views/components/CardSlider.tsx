import "../../i18next";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

interface CardSliderProps {
  data: { name: string; img: string; desc: string }[];
}

export const CardSlider = ({ data }: CardSliderProps) => {
  const { t } = useTranslation();

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='slider-container'>
      <Slider {...settings} className='slider'>
        {data.map((item) => (
          <Card className='slider-card-container'>
            <Card.Img
              variant='top'
              src={item.img}
              alt={item.name}
              className='slider-card-img'
            />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.desc}</Card.Text>
              <Link to='/o-nas' className='links-button'>
                {t("general.seeMore")}
              </Link>
            </Card.Body>
          </Card>
        ))}
      </Slider>
    </div>
  );
};
