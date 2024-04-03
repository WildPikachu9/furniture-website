import "../i18next";
import { useTranslation } from "react-i18next";

export const BlogDataHomePage = () => {
  const { t } = useTranslation();

  const blogDataHomePage = [
    {
      name: t("blogDataHomePage.blog1.name"),
      img: "/img/img3.jpg",
      desc: t("blogDataHomePage.blog1.desc"),
    },
    {
      name: t("blogDataHomePage.blog2.name"),
      img: "/img/img3.jpg",
      desc: t("blogDataHomePage.blog2.desc"),
    },
    {
      name: t("blogDataHomePage.blog3.name"),
      img: "/img/img3.jpg",
      desc: t("blogDataHomePage.blog3.desc"),
    },
    {
      name: t("blogDataHomePage.blog4.name"),
      img: "/img/img3.jpg",
      desc: t("blogDataHomePage.blog4.desc"),
    },
    {
      name: t("blogDataHomePage.blog5.name"),
      img: "/img/img3.jpg",
      desc: t("blogDataHomePage.blog5.desc"),
    },
    {
      name: t("blogDataHomePage.blog6.name"),
      img: "/img/img3.jpg",
      desc: t("blogDataHomePage.blog6.desc"),
    },
    {
      name: t("blogDataHomePage.blog7.name"),
      img: "/img/img3.jpg",
      desc: t("blogDataHomePage.blog7.desc"),
    },
  ];

  return blogDataHomePage;
};
