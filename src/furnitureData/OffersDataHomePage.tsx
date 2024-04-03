import "../i18next";
import { useTranslation } from "react-i18next";

export const OffersDataHomePage = () => {
  const { t } = useTranslation();

  const offersDataHomePage = [
    {
      name: t("offersDataHomePage.offer1.name"),
      img: "/img/img2.jpg",
      desc: t("offersDataHomePage.offer1.desc"),
    },
    {
      name: t("offersDataHomePage.offer2.name"),
      img: "/img/img1.jpg",
      desc: t("offersDataHomePage.offer2.desc"),
    },
    {
      name: t("offersDataHomePage.offer3.name"),
      img: "/img/img2.jpg",
      desc: t("offersDataHomePage.offer3.desc"),
    },
    {
      name: t("offersDataHomePage.offer4.name"),
      img: "/img/img2.jpg",
      desc: t("offersDataHomePage.offer4.desc"),
    },
    {
      name: t("offersDataHomePage.offer5.name"),
      img: "/img/img1.jpg",
      desc: t("offersDataHomePage.offer5.desc"),
    },
  ];

  return offersDataHomePage;
};
