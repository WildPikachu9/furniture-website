import "../../index.scss";
import "../../i18next";
import { useTranslation } from "react-i18next";
import { Footer } from "../components/footer/Footer";
import { SecondaryHeader } from "../components/secondaryHeader/SecondaryHeader";
import { MetaData } from "../components/metaData/MetaData";
import { MapComponent } from "../components/mapComponent/MapComponent";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className='contact-layout-container'>
      <MetaData
        metaDesc={t("metaData.descriptionContact")}
        title={t("general.menu.contact")}
      />
      <SecondaryHeader children={t("general.menu.contact")} />
      <MapComponent />
      <Footer />
    </div>
  );
};
