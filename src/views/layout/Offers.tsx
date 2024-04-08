import "../../index.scss";
import "../../i18next";
import { useTranslation } from "react-i18next";
import { Footer } from "../components/footer/Footer";
import { SecondaryHeader } from "../components/secondaryHeader/SecondaryHeader";
import { MetaData } from "../components/metaData/MetaData";

export const Offers = () => {
  const { t } = useTranslation();
  return (
    <div className='offers-layout-container'>
      <MetaData
        metaDesc={t("metaData.descriptionOffers")}
        title={t("general.menu.offers")}
      />
      <SecondaryHeader children={t("general.menu.offers")} />
      <Footer />
    </div>
  );
};
