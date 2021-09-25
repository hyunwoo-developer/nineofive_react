import axios from "axios";
import React, { useEffect, useState } from "react";
import GalleryComponent from "../../components/gallery/GalleryComponent";
import { baseURL } from "../home/HomeContainer";

export default function GalleryContainer() {
  const [galleryList, setGalleryList] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: `${baseURL}/gallery`,
    })
      .then((response) => {
        const result = response.data.data;
        setGalleryList(result);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  return <GalleryComponent galleryList={galleryList} />;
}
