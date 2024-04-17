import "../i18next";
import { useTranslation } from "react-i18next";

import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";

export const OffersDataHomePage = () => {
  const { t } = useTranslation();

  const offersDataHomePage = [
    {
      name: t("offersDataHomePage.offer1.name"),
      header: t("offersDataHomePage.offer1.header"),
      img: img1,
      desc: t("offersDataHomePage.offer1.desc"),
      descMore: t("offersDataHomePage.offer1.descMore"),
    },
    {
      name: t("offersDataHomePage.offer2.name"),
      header: t("offersDataHomePage.offer2.header"),
      img: img2,
      desc: t("offersDataHomePage.offer2.desc"),
      descMore: t("offersDataHomePage.offer2.descMore"),
    },
    {
      name: t("offersDataHomePage.offer3.name"),
      header: t("offersDataHomePage.offer3.header"),
      img: img3,
      desc: t("offersDataHomePage.offer3.desc"),
      descMore: t("offersDataHomePage.offer3.descMore"),
    },
    {
      name: t("offersDataHomePage.offer4.name"),
      header: t("offersDataHomePage.offer4.header"),
      img: img1,
      desc: t("offersDataHomePage.offer4.desc"),
      descMore: t("offersDataHomePage.offer4.descMore"),
    },
    {
      name: t("offersDataHomePage.offer5.name"),
      header: t("offersDataHomePage.offer5.header"),
      img: img2,
      desc: t("offersDataHomePage.offer5.desc"),
      descMore: t("offersDataHomePage.offer5.descMore"),
    },
  ];

  return offersDataHomePage;
};
