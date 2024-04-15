import "../../index.scss";
import "../../i18next";
import { useTranslation } from "react-i18next";
import { Footer } from "../components/footer/Footer";
import { SecondaryHeader } from "../components/secondaryHeader/SecondaryHeader";
import { MetaData } from "../components/metaData/MetaData";

import projectIcon from "../../img/icons/project.webp";
import commnicationIcon from "../../img/icons/communication.webp";
import processIcon from "../../img/icons/furniture-process.webp";
import deliveryIcon from "../../img/icons/delivery.webp";

export const About = () => {
  const { t } = useTranslation();

  return (
    <div className='about-layout-container layout-container'>
      <MetaData
        metaDesc={t("metaData.descriptionAbout")}
        title={t("general.menu.about")}
      />
      <SecondaryHeader children={t("general.menu.about")} />
      <article className='about-desc-container about-container'>
        <h2 className='main-title'>{t("about.headerHistory")}</h2>
        <p className='about-desc-item'>{t("about.article1")}</p>
        <p className='about-desc-item'>{t("about.article2")}</p>
        <p className='about-desc-item'>{t("about.article3")}</p>
      </article>
      <section className='work-process-container about-container'>
        <h2 className='main-title'>{t("about.headerProcess")}</h2>
        <div className='work-process'>
          <div className='work-item-container'>
            <img src={commnicationIcon} alt={t("about.workProcess.contact")} />
            <div className='work-item-desc'>
              <h3 className='main-title'>{t("about.workProcess.contact")}</h3>
              <p className='about-desc-item'>
                {t("about.workProcess.contactDesc")}
              </p>
            </div>
          </div>
          <div className='work-item-container'>
            <img src={projectIcon} alt={t("about.workProcess.consultation")} />
            <div className='work-item-desc'>
              <h3 className='main-title'>
                {t("about.workProcess.consultation")}
              </h3>
              <p className='about-desc-item'>
                {t("about.workProcess.consultationDesc")}
              </p>
            </div>
          </div>
          <div className='work-item-container'>
            <img src={processIcon} alt={t("about.workProcess.production")} />
            <div className='work-item-desc'>
              <h3 className='main-title'>
                {t("about.workProcess.production")}
              </h3>
              <p className='about-desc-item'>
                {t("about.workProcess.productionDesc")}
              </p>
            </div>
          </div>
          <div className='work-item-container'>
            <img src={deliveryIcon} alt={t("about.workProcess.delivery")} />
            <div className='work-item-desc'>
              <h3 className='main-title'>{t("about.workProcess.delivery")}</h3>
              <p className='about-desc-item'>
                {t("about.workProcess.deliveryDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
