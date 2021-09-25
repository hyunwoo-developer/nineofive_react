import React from "react";
import Masonry from "react-masonry-css";
import "./masonry.css";

export default function GalleryComponent({ galleryList }) {
  const items = galleryList.map((item) => {
    return (
      <img
        key={item.imgIdx}
        src={item.img}
        style={{ width: "100%" }}
        alt="img"
      />
    );
  });

  return (
    <>
      <hr />
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid-column"
      >
        {items}
      </Masonry>
    </>
  );
}
