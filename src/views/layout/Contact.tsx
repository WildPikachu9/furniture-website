import "../../index.scss";
import "../../i18next";
import { useTranslation } from "react-i18next";
import { Footer } from "../components/footer/Footer";
import { SecondaryHeader } from "../components/secondaryHeader/SecondaryHeader";
import { MetaData } from "../components/metaData/MetaData";
import { MapComponent } from "../components/mapComponent/MapComponent";
import { ContactForm } from "../components/contactForm/ContactForm";

import phoneIcon from "../../img/icons/phone.webp";
import emailIcon from "../../img/icons/email.webp";
import clockIcon from "../../img/icons/clock.webp";
import { SocialLinks } from "../components/socialLinks/SocialLinks";

const ContactInformation = () => {
  const { t } = useTranslation();

  return (
    <div className='common-info-container'>
      <div className='contact-items-container'>
        <div className='contact-item-container'>
          <div className='img-holder'>
            <img
              src={phoneIcon}
              alt={t("contact.phoneNumber")}
              className='contact-img'
            />
          </div>

          <div className='contact-item'>
            <h3 className='contact-header'>{t("contact.phoneNumber")}</h3>
            <a href='tel:+48123123123'>+48123123123</a>
            <br />
            <a href='tel:+38093312323'>+38093312323</a>
          </div>
        </div>
        <div className='contact-item-container'>
          <div className='img-holder'>
            <img src={emailIcon} alt='Email' className='contact-img' />
          </div>

          <div className='contact-item'>
            <h3 className='contact-header'>email</h3>
            <a href='mailto:arsmeble@gmail.com'>arsmeble@gmail.com</a>
          </div>
        </div>
        <div className='contact-item-container'>
          <div className='img-holder'>
            <img
              src={clockIcon}
              alt={t("contact.workingHours")}
              className='contact-img'
            />
          </div>
          <div className='contact-item'>
            <h3 className='contact-header'>{t("contact.workingHours")}</h3>
            <p>
              <span>{t("contact.weekdays")}</span>
              {t("contact.hoursWeekdays")}
            </p>
            <p>
              <span>{t("contact.weekends")}</span>
              {t("contact.hoursWeekends")}
            </p>
          </div>
        </div>
      </div>
      <SocialLinks />
    </div>
  );
};

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className='contact-layout-container'>
      <MetaData
        metaDesc={t("metaData.descriptionContact")}
        title={t("general.menu.contact")}
      />
      <SecondaryHeader children={t("general.menu.contact")} />
      <section className='contact-form-container'>
        <h2 className='main-title'>{t("contact.contactCompany")}</h2>
        <div className='container'>
          <ContactInformation />
          <ContactForm />
        </div>
      </section>
      <MapComponent />
      <Footer />
    </div>
  );
};
