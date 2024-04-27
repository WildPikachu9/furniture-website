import kitchen1 from "../img/kitchen/photo_2024-04-26_10-21-33.webp";
import kitchen2 from "../img/kitchen/kuchnia-11.webp";
import kitchen3 from "../img/kitchen/kuchnia-12.webp";
import kitchen4 from "../img/kitchen/kuchnia-13.webp";
import kitchen5 from "../img/kitchen/kuchnia-14.webp";
import kitchen6 from "../img/kitchen/kuchnia-2.webp";
import kitchen7 from "../img/kitchen/photo_2024-04-26_10-11-30.webp";
import kitchen8 from "../img/kitchen/photo_2024-04-26_10-14-57.webp";
import kitchen9 from "../img/kitchen/photo_2024-04-26_10-15-09.webp";
import kitchen10 from "../img/kitchen/photo_2024-04-26_10-15-15.webp";
import kitchen11 from "../img/kitchen/photo_2024-04-26_10-15-32.webp";
import kitchen12 from "../img/kitchen/photo_2024-04-26_10-15-43.webp";
import kitchen13 from "../img/kitchen/photo_2024-04-26_10-15-48.webp";
import kitchen14 from "../img/kitchen/photo_2024-04-26_10-19-10.webp";
import kitchen15 from "../img/kitchen/photo_2024-04-26_10-16-29.webp";
import kitchen16 from "../img/kitchen/photo_2024-04-26_10-16-34.webp";
import kitchen17 from "../img/kitchen/photo_2024-04-26_10-16-38.webp";
import kitchen18 from "../img/kitchen/photo_2024-04-26_10-19-15.webp";
import kitchen19 from "../img/kitchen/photo_2024-04-26_10-17-05.webp";
import kitchen20 from "../img/kitchen/photo_2024-04-26_10-17-10.webp";
import kitchen21 from "../img/kitchen/photo_2024-04-26_10-21-39.webp";
import kitchen22 from "../img/kitchen/photo_2024-04-26_10-21-52.webp";
import kitchen23 from "../img/kitchen/photo_2024-04-26_10-22-05.webp";
import kitchen24 from "../img/kitchen/photo_2024-04-26_10-17-55.webp";
import kitchen25 from "../img/kitchen/photo_2024-04-26_10-18-01.webp";
import kitchen26 from "../img/kitchen/photo_2024-04-26_10-18-05.webp";
import kitchen27 from "../img/kitchen/photo_2024-04-26_10-18-20.webp";
import kitchen28 from "../img/kitchen/photo_2024-04-26_10-22-19.webp";
import kitchen29 from "../img/kitchen/photo_2024-04-26_10-18-37.webp";
import kitchen30 from "../img/kitchen/photo_2024-04-26_10-23-06.webp";
import kitchen31 from "../img/kitchen/photo_2024-04-26_10-23-40.webp";

interface Photo {
  src: string;
  width: number;
  height: number;
}

const localPhotos = [
  { src: kitchen2, width: 1080, height: 800 },
  { src: kitchen3, width: 1080, height: 800 },
  { src: kitchen4, width: 1080, height: 800 },
  { src: kitchen5, width: 1080, height: 1620 },
  { src: kitchen6, width: 1080, height: 1620 },
  { src: kitchen7, width: 1080, height: 1620 },
  { src: kitchen8, width: 1080, height: 1620 },
  { src: kitchen9, width: 1080, height: 1620 },
  { src: kitchen10, width: 1080, height: 800 },
  { src: kitchen11, width: 1080, height: 721 },
  { src: kitchen12, width: 1080, height: 1620 },
  { src: kitchen13, width: 1080, height: 1620 },
  { src: kitchen14, width: 1080, height: 800 },
  { src: kitchen15, width: 1080, height: 1620 },
  { src: kitchen16, width: 1080, height: 1620 },
  { src: kitchen17, width: 1080, height: 721 },
  { src: kitchen19, width: 1080, height: 721 },
  { src: kitchen20, width: 1080, height: 1620 },
  { src: kitchen21, width: 1080, height: 800 },
  { src: kitchen22, width: 1080, height: 720 },
  { src: kitchen23, width: 1080, height: 721 },
  { src: kitchen24, width: 1080, height: 800 },
  { src: kitchen25, width: 1080, height: 1620 },
  { src: kitchen26, width: 1080, height: 1620 },
  { src: kitchen27, width: 1080, height: 1620 },
  { src: kitchen28, width: 1080, height: 1620 },
  { src: kitchen29, width: 1080, height: 721 },
  { src: kitchen30, width: 1080, height: 1620 },
  { src: kitchen31, width: 1080, height: 900 },
  { src: kitchen1, width: 1080, height: 1620 },
  { src: kitchen18, width: 1080, height: 800 },
];

const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

export const PhotosGallery = localPhotos.map((photo: Photo) => {
  const width = photo.width;
  const height = photo.height;

  return {
    src: photo.src,
    width,
    height,
    srcSet: breakpoints.map((breakpoint) => {
      const newWidth = breakpoint;
      const newHeight = Math.round((height / width) * newWidth);
      return {
        src: photo.src,
        width: newWidth,
        height: newHeight,
      };
    }),
  };
});
