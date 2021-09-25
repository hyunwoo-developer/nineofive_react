import React from "react";
import GalleryContainer from "../containers/gallery/GalleryContainer";
import GalleryUploadContainer from "../containers/gallery/GalleryUploadContainer";

export default function Gallery() {
  return (
    <>
      <GalleryUploadContainer />
      <GalleryContainer />;
    </>
  );
}
