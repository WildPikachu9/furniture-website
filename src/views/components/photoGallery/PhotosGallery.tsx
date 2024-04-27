import { localPhotos } from "../../../furnitureData/PhotosGalleryData";

interface Photo {
  src: string;
  width: number;
  height: number;
}

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
