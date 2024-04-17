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
      img: img1,
      desc: t("offersDataHomePage.offer1.desc"),
      descMore: t("offersDataHomePage.offer1.descMore"),
    },
    {
      name: t("offersDataHomePage.offer2.name"),
      img: img2,
      desc: t("offersDataHomePage.offer2.desc"),
      descMore: t("offersDataHomePage.offer2.descMore"),
    },
    {
      name: t("offersDataHomePage.offer3.name"),
      img: img3,
      desc: t("offersDataHomePage.offer3.desc"),
      descMore: t("offersDataHomePage.offer3.descMore"),
    },
    {
      name: t("offersDataHomePage.offer4.name"),
      img: img1,
      desc: t("offersDataHomePage.offer4.desc"),
      descMore: t("offersDataHomePage.offer4.descMore"),
    },
    {
      name: t("offersDataHomePage.offer5.name"),
      img: img2,
      desc: t("offersDataHomePage.offer5.desc"),
      descMore: t("offersDataHomePage.offer5.descMore"),
    },
  ];

  return offersDataHomePage;
};
