import "../i18next";
import { useTranslation } from "react-i18next";

import kitchen from "../img/banner-1.webp";
import bedroom from "../img/bedroom/szafa-1.webp";
import bathroom from "../img/bathroom/photo_2024-04-26_10-11-13.webp";
import attic from "../img/attic/zabudowa-skosow-3.webp";
import hall from "../img/hall/hall1.webp";

export const OffersDataHomePage = () => {
  const { t } = useTranslation();

  const offersDataHomePage = [
    {
      name: t("offersDataHomePage.offer1.name"),
      header: t("offersDataHomePage.offer1.header"),
      img: kitchen,
      desc: t("offersDataHomePage.offer1.desc"),
      descMore: t("offersDataHomePage.offer1.descMore"),
    },
    {
      name: t("offersDataHomePage.offer2.name"),
      header: t("offersDataHomePage.offer2.header"),
      img: hall,
      desc: t("offersDataHomePage.offer2.desc"),
      descMore: t("offersDataHomePage.offer2.descMore"),
    },
    {
      name: t("offersDataHomePage.offer3.name"),
      header: t("offersDataHomePage.offer3.header"),
      img: bedroom,
      desc: t("offersDataHomePage.offer3.desc"),
      descMore: t("offersDataHomePage.offer3.descMore"),
    },
    {
      name: t("offersDataHomePage.offer4.name"),
      header: t("offersDataHomePage.offer4.header"),
      img: attic,
      desc: t("offersDataHomePage.offer4.desc"),
      descMore: t("offersDataHomePage.offer4.descMore"),
    },
    {
      name: t("offersDataHomePage.offer5.name"),
      header: t("offersDataHomePage.offer5.header"),
      img: bathroom,
      desc: t("offersDataHomePage.offer5.desc"),
      descMore: t("offersDataHomePage.offer5.descMore"),
    },
  ];

  return offersDataHomePage;
};
