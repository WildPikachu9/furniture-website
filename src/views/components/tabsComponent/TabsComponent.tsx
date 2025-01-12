import "../../../i18next";
import { useTranslation } from "react-i18next";
import { Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ButtonMain } from "../ButtonMain";
import { OffersDataHomePage } from "../../../furnitureData/OffersDataHomePage";

export const TabsComponent = () => {
  const { t } = useTranslation();
  const offers = OffersDataHomePage();
  return (
    <>
      <Tabs
        defaultActiveKey='Meble kuchenne'
        id='fill-tab-example'
        className='mb-3 tabs-component-container'
        fill
      >
        {offers.map((item, index) => (
          <Tab key={index} eventKey={item.name} title={item.name}>
            <section className='offer-section-container'>
              <div className='image-container'>
                <Link to={"/galeria"}>
                  <img src={item.img} alt={item.name} loading='lazy' />
                </Link>
              </div>
              <div className='offer-desc-container'>
                <h3 className='main-title'>{item.header}</h3>
                <p>{item.desc}</p>
                <p>{item.descMore}</p>
              </div>
            </section>
          </Tab>
        ))}
      </Tabs>
      <div className='button-container'>
        <ButtonMain>
          <Link to={"/galeria"}>{t("general.seeMoreImages")}</Link>
        </ButtonMain>
      </div>
    </>
  );
};
