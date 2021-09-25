import axios from "axios";
import React, { useState } from "react";
import BoardWriteComponent from "../../components/board/BoardWriteComponent";
import { baseURL } from "../home/HomeContainer";

export const getAllBoard = async () => {
  const response = await axios({
    method: "GET",
    url: `${baseURL}/board`,
  });
  const result = response.data.data;
  return result;
};

export default function WriteBoard() {
  const [content, setContent] = useState({
    title: "",
    content: "",
    writer: "",
  });

  const [viewContent, setViewContent] = useState([]);

  const getValue = (event) => {
    const { name, value } = event.target;
    setContent({
      ...content,
      [name]: value,
    });
  };

  const changeContent = (event, editor) => {
    const data = editor.getData();
    setContent({
      ...content,
      content: data,
    });
  };

  const submitContent = async () => {
    try {
      // const newContent = {
      //   title: "",
      //   content: "",
      //   writer: "",
      // };
      const response = await axios({
        method: "POST",
        url: `${baseURL}/board`,
        data: content,
      });
      if (response.status === 200) {
        const result = await getAllBoard();
        setViewContent(result);
        setContent({
          title: "",
          content: "",
          writer: "",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BoardWriteComponent
      content={content}
      getValue={getValue}
      changeContent={changeContent}
      submitContent={submitContent}
    />
  );
}
