import "../i18next";
import { useTranslation } from "react-i18next";

import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";

export const BlogDataHomePage = () => {
  const { t } = useTranslation();

  const blogDataHomePage = [
    {
      name: t("blogDataHomePage.blog1.name"),
      img: img1,
      desc: t("blogDataHomePage.blog1.desc"),
    },
    {
      name: t("blogDataHomePage.blog2.name"),
      img: img2,
      desc: t("blogDataHomePage.blog2.desc"),
    },
    {
      name: t("blogDataHomePage.blog3.name"),
      img: img3,
      desc: t("blogDataHomePage.blog3.desc"),
    },
    {
      name: t("blogDataHomePage.blog4.name"),
      img: img3,
      desc: t("blogDataHomePage.blog4.desc"),
    },
    {
      name: t("blogDataHomePage.blog5.name"),
      img: img2,
      desc: t("blogDataHomePage.blog5.desc"),
    },
    {
      name: t("blogDataHomePage.blog6.name"),
      img: img1,
      desc: t("blogDataHomePage.blog6.desc"),
    },
    {
      name: t("blogDataHomePage.blog7.name"),
      img: img3,
      desc: t("blogDataHomePage.blog7.desc"),
    },
  ];

  return blogDataHomePage;
};
