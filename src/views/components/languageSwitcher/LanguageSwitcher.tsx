import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "de", lang: "Deutsch" },
  { code: "pl", lang: "Polski" },
  { code: "ua", lang: "Українська" },
];

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <select
        name='lang'
        onChange={(e) => changeLanguage(e.target.value)}
        className='language-select'
      >
        {languages.map((lng) => {
          return (
            <option
              key={lng.code}
              value={lng.code}
              selected={lng.code === i18n.language}
              className='language-option'
            >
              {lng.lang}
            </option>
          );
        })}
      </select>
    </>
  );
};
