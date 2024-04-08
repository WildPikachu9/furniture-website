import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

interface MetaDataProps {
  title?: string;
  metaDesc: string;
}

export const MetaData = ({ title, metaDesc }: MetaDataProps) => {
  const { i18n } = useTranslation();

  return (
    <Helmet>
      <html lang={i18n.language} />
      <title>{title ? title + " | arsmeble." : "arsmeble."}</title>
      <meta name='description' content={metaDesc} />
    </Helmet>
  );
};
