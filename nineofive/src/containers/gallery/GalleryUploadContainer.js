import React, { useState } from "react";
import GalleryUploadComponent from "../../components/gallery/GalleryUploadComponent";
import { baseURL } from "../home/HomeContainer";
import axios from "axios";

export default function GalleryUploadContainer() {
  // S3 fileUrl 상태관리
  const [fileUrl, setFileUrl] = useState(null);
  // local fileURL 상태관리
  const [imgUrl, setImgUrl] = useState(null);
  // 파일명 상태관리
  const [inputUrl, setInputUrl] = useState(null);
  // 파일 선택(미리보기)
  const onChangeFile = async (event) => {
    const inputFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(inputFile);
    setInputUrl(inputFile);
    setFileUrl(imageUrl);
  };

  const onSubmitFile = async () => {
    const formData = new FormData();
    formData.append("img", inputUrl);

    const response = await axios({
      method: "POST",
      url: `${baseURL}/gallery`,
      header: { "Content-Type": "multipart/form-data" },
      data: formData,
    });

    if (response.status === 200) {
      const result = response.data;
      const resultImgUrl = result.imgUrl;
      setImgUrl(resultImgUrl);
      console.log("업로드 성공");
    } else {
      console.log("업로드 실패");
    }
  };

  return (
    <GalleryUploadComponent
      fileUrl={fileUrl}
      onChangeFile={onChangeFile}
      onSubmitFile={onSubmitFile}
    />
  );
}
