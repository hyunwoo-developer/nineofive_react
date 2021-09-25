import React from "react";

import { BiCloudUpload } from "react-icons/bi";
import styled from "styled-components";

const PreviewImg = styled.img`
  width: 200px;
  height: auto;
`;

const Button = styled.div`
  height: 2rem;
  font-size: 1.5rem;
  display: flex;
  border: 2px solid #aaa;
  border-radius: 4px;
  outline: none;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #03c75a;
  cursor: pointer;
  width: 25%;
  margin-bottom: 30px;
`;

export default function GalleryUploadComponent({
  fileUrl,
  onChangeFile,
  onSubmitFile,
}) {
  return (
    <div>
      <PreviewImg src={fileUrl} />
      <br />
      <input type="file" onChange={onChangeFile} />
      <br />
      <br />
      <Button onClick={onSubmitFile}>
        올리기
        <BiCloudUpload />
      </Button>
    </div>
  );
}
