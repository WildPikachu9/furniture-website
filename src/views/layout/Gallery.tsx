import "../../i18next";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import "../../index.scss";
import { Footer } from "../components/footer/Footer";
import { PhotosGallery } from "../components/photoGallery/PhotosGallery";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
  Fullscreen,
  Slideshow,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { SecondaryHeader } from "../components/secondaryHeader/SecondaryHeader";
import { MetaData } from "../components/metaData/MetaData";

export const Gallery = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(-1);

  return (
    <div className='gallery-layout-container'>
      <MetaData
        metaDesc={t("metaData.descriptionGallery")}
        title={t("general.menu.gallery")}
      />
      <SecondaryHeader children={t("general.menu.gallery")} />
      <section className='gallery-container'>
        <h2 className='main-title'>nasza galeria zdjec</h2>
        <PhotoAlbum
          photos={PhotosGallery.map((photo, index) => ({
            ...photo,
            key: index.toString(),
          }))}
          layout='rows'
          targetRowHeight={150}
          onClick={({ index }) => setIndex(index)}
        />

        <Lightbox
          slides={PhotosGallery}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </section>
      <Footer />
    </div>
  );
};
