import "../../index.scss";
import "../../i18next";
import { useTranslation } from "react-i18next";
import { Footer } from "../components/footer/Footer";
import { SecondaryHeader } from "../components/secondaryHeader/SecondaryHeader";
import { MetaData } from "../components/metaData/MetaData";

export const About = () => {
  const { t } = useTranslation();

  return (
    <div className='about-layout-container'>
      <MetaData
        metaDesc={t("metaData.descriptionAbout")}
        title={t("general.menu.about")}
      />
      <SecondaryHeader children={t("general.menu.about")} />
      <Footer />
    </div>
  );
};
