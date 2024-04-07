import { useState } from "react";
import "../../App.scss";
import { Footer } from "../components/footer/Footer";
import { PhotosGallery } from "../../furnitureData/PhotosGallery";

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

export const Gallery = () => {
  const [index, setIndex] = useState(-1);

  return (
    <div className='gallery-layout-container'>
      <SecondaryHeader />
      <section className='gallery-container'>
        <PhotoAlbum
          photos={PhotosGallery}
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
