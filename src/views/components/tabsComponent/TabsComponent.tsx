import { Tab, Tabs } from "react-bootstrap";
import "../../../i18next";
import { useTranslation } from "react-i18next";

import ico from "../../../img/img1.jpg";
import { Link } from "react-router-dom";
import { ButtonMain } from "../ButtonMain";

export const TabsComponent = () => {
  const { t } = useTranslation();
  return (
    <>
      <Tabs
        defaultActiveKey='Meble kuchenne'
        id='fill-tab-example'
        className='mb-3 tabs-component-container'
        fill
      >
        <Tab eventKey='Meble kuchenne' title='Meble kuchenne'>
          <section className='offer-section-container'>
            <div className='image-container'>
              <Link to={"/galeria"}>
                <img src={ico} alt='' />
              </Link>
            </div>
            <div className='offer-desc-container'>
              <h3 className='main-title'>Meble kuchenne na wymiar</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                tempore nostrum libero hic ipsum! Sit amet ipsam, distinctio est
                reiciendis rem magni deserunt laboriosam commodi, impedit iusto
                dolorum atque labore.
              </p>
            </div>
          </section>
        </Tab>
        <Tab eventKey='profile' title='Meble lazienkowe'>
          <section className='offer-section-container'>
            <div className='image-container'>
              <Link to={"/galeria"}>
                <img src={ico} alt='' />
              </Link>
            </div>
            <div className='offer-desc-container'>
              <h3 className='main-title'>Meble kuchenne na wymiar</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                tempore nostrum libero hic ipsum! Sit amet ipsam, distinctio est
                reiciendis rem magni deserunt laboriosam commodi, impedit iusto
                dolorum atque labore.
              </p>
            </div>
          </section>
        </Tab>
        <Tab eventKey='longer-tab' title='Meble biurowe'>
          <section className='offer-section-container'>
            <div className='image-container'>
              <Link to={"/galeria"}>
                <img src={ico} alt='' />
              </Link>
            </div>
            <div className='offer-desc-container'>
              <h3 className='main-title'>Meble kuchenne na wymiar</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                tempore nostrum libero hic ipsum! Sit amet ipsam, distinctio est
                reiciendis rem magni deserunt laboriosam commodi, impedit iusto
                dolorum atque labore.
              </p>
            </div>
          </section>
        </Tab>
        <Tab eventKey='contact' title='Szafy i garderoby'>
          <section className='offer-section-container'>
            <div className='image-container'>
              <Link to={"/galeria"}>
                <img src={ico} alt='' />
              </Link>
            </div>

            <div className='offer-desc-container'>
              <h3 className='main-title'>Meble kuchenne na wymiar</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                tempore nostrum libero hic ipsum! Sit amet ipsam, distinctio est
                reiciendis rem magni deserunt laboriosam commodi, impedit iusto
                dolorum atque labore.
              </p>
            </div>
          </section>
        </Tab>
        <Tab eventKey='contact2' title='Meble dziecięce'>
          <section className='offer-section-container'>
            <div className='image-container'>
              <Link to={"/galeria"}>
                <img src={ico} alt='' />
              </Link>
            </div>
            <div className='offer-desc-container'>
              <h3 className='main-title'>Meble dziecięce na wymiar</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                tempore nostrum libero hic ipsum! Sit amet ipsam, distinctio est
                reiciendis rem magni deserunt laboriosam commodi, impedit iusto
                dolorum atque labore.
              </p>
            </div>
          </section>
        </Tab>
      </Tabs>
      <div className='button-container'>
        <ButtonMain>
          <Link to={"/galeria"}>nasza galeria</Link>
        </ButtonMain>
      </div>
    </>
  );
};
