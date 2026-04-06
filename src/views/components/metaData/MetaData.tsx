import { Helmet, HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";

interface MetaDataProps {
  metaTitle?: string;
  metaDesc: string;
}

export const MetaData = ({ metaTitle, metaDesc }: MetaDataProps) => {
  const { i18n } = useTranslation();

  return (
    <HelmetProvider>
      <Helmet>
        <html lang={i18n.language} />
        <title>{metaTitle + " | ANSO HOME"}</title>
        <meta name='description' content={metaDesc} />
      </Helmet>
    </HelmetProvider>
  );
};
