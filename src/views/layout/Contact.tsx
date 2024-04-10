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
  return (
    <div className='common-info-container'>
      <div className='contact-item-container'>
        <div className='img-holder'>
          <img src={phoneIcon} alt='' className='contact-img' />
        </div>

        <div className='contact-item'>
          <h3 className='contact-header'>numer telefonu</h3>
          <a href='tel:+48123123123'>+48123123123</a>
          <br />
          <a href='tel:+38093312323'>+38093312323</a>
        </div>
      </div>
      <div className='contact-item-container'>
        <div className='img-holder'>
          <img src={emailIcon} alt='' className='contact-img' />
        </div>

        <div className='contact-item'>
          <h3 className='contact-header'>email</h3>
          <a href='mailto:arsmeble@gmail.com'>arsmeble@gmail.com</a>
        </div>
      </div>
      <div className='contact-item-container'>
        <div className='img-holder'>
          <img src={clockIcon} alt='' className='contact-img' />
        </div>
        <div className='contact-item'>
          <h3 className='contact-header'>czas pracy</h3>
          <p>
            <span>pon-pt:</span> з 10:00 до 19:00
          </p>
          <p>
            <span>sob:</span> з 10:00 до 17:00
          </p>
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
        <h2 className='main-title'>
          Kontakt z producentem mebli na wymiar arsmeble.
        </h2>
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
