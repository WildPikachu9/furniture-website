import "../../i18next";
import { useTranslation } from "react-i18next";
import { MetaData } from "../components/metaData/MetaData";
import { SecondaryHeader } from "../components/secondaryHeader/SecondaryHeader";
import { Footer } from "../components/footer/Footer";

export const PrivacyPolicy = () => {
  const { t } = useTranslation();
  return (
    <div className='privacy-component-container'>
      <MetaData
        metaDesc={t("metaData.descriptionHome")}
        title={t("general.menu.policy")}
      />
      <SecondaryHeader children={t("general.menu.policy")} />
      <section className='policy-desc-container main-section-container'>
        <article className='policy-article'>
          <h3 className='main-title'>{t("policy.article1.header")}</h3>
          <p>{t("policy.article1.text")}</p>
        </article>
        <article className='policy-article'>
          <h3 className='main-title'>{t("policy.article2.header")}</h3>
          <p>{t("policy.article2.text")}</p>
        </article>
        <article className='policy-article'>
          <h3 className='main-title'>{t("policy.article3.header")}</h3>
          <p>{t("policy.article3.text")}</p>
        </article>
        <article className='policy-article'>
          <h3 className='main-title'>{t("policy.article4.header")}</h3>
          <p>{t("policy.article4.text")}</p>
        </article>
        <article className='policy-article'>
          <h3 className='main-title'>{t("policy.article5.header")}</h3>
          <p>{t("policy.article5.text")}</p>
        </article>
        <article className='policy-article'>
          <h3 className='main-title'>{t("general.menu.contact")}</h3>
          <p>{t("policy.article6.text")}</p>
        </article>
        <article className='policy-article'>
          <h3 className='main-title'>{t("policy.article7.header")}</h3>
          <p>{t("policy.article7.text")}</p>
        </article>
      </section>
      <Footer />
    </div>
  );
};
