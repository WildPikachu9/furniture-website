import "../i18next";
import { useTranslation } from "react-i18next";

import img1 from "../img/reviews/qqq.png";

export const ReviewDataHomePage = () => {
  const { t } = useTranslation();

  const blogDataHomePage = [
    {
      name: t("blogDataHomePage.blog1.name"),
      img: img1,
    },
    {
      name: t("blogDataHomePage.blog1.name"),
      img: img1,
    },
    {
      name: t("blogDataHomePage.blog1.name"),
      img: img1,
    },
    {
      name: t("blogDataHomePage.blog1.name"),
      img: img1,
    },
    {
      name: t("blogDataHomePage.blog1.name"),
      img: img1,
    },
    {
      name: t("blogDataHomePage.blog1.name"),
      img: img1,
    },
    {
      name: t("blogDataHomePage.blog1.name"),
      img: img1,
    },
  ];

  return blogDataHomePage;
};
