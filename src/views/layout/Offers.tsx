import "../../index.scss";
import "../../i18next";
import { useTranslation } from "react-i18next";
import { Footer } from "../components/footer/Footer";
import { SecondaryHeader } from "../components/secondaryHeader/SecondaryHeader";
import { MetaData } from "../components/metaData/MetaData";

import creativityIcon from "../../img/icons/creativity.webp";
import designIcon from "../../img/icons/design.webp";
import projectIcon from "../../img/icons/project.webp";
import guaranteeIcon from "../../img/icons/guarantee.webp";
import deliveryIcon from "../../img/icons/delivery.webp";

export const Offers = () => {
  const { t } = useTranslation();
  return (
    <div className='offers-layout-container layout-container'>
      <MetaData
        metaDesc={t("metaData.descriptionOffers")}
        title={t("general.menu.offers")}
      />
      <SecondaryHeader children={t("general.menu.offers")} />
      <section className='process-container about-container'>
        <h2 className='main-title'>{t("offers.offer")}</h2>
        <div className='work-process'>
          <div className='work-item-container'>
            <img src={creativityIcon} alt={t("offers.design")} />
            <h3 className='main-title'>{t("offers.design")}</h3>
          </div>
          <div className='work-item-container'>
            <img src={projectIcon} alt={t("offers.details")} />
            <h3 className='main-title'>{t("offers.details")}</h3>
          </div>
          <div className='work-item-container'>
            <img src={designIcon} alt={t("offers.accessories")} />
            <h3 className='main-title'>{t("offers.accessories")}</h3>
          </div>
          <div className='work-item-container'>
            <img src={guaranteeIcon} alt={t("offers.guarancee")} />
            <h3 className='main-title'>{t("offers.guarancee")}</h3>
          </div>
          <div className='work-item-container'>
            <img src={deliveryIcon} alt={t("offers.delivery")} />
            <h3 className='main-title'>{t("offers.delivery")}</h3>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
