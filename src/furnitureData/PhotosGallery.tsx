import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";

const localPhotos = [
  { src: img1, width: 1080, height: 800 },
  { src: img2, width: 1080, height: 1620 },
  { src: img3, width: 1080, height: 720 },
  { src: img1, width: 1080, height: 721 },
  { src: img2, width: 1080, height: 1620 },
  { src: img3, width: 1080, height: 607 },
];

const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

export const PhotosGallery = localPhotos.map((photo) => {
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
