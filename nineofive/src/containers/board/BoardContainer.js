import axios from "axios";
import React, { useEffect, useState } from "react";
import BoardComponent from "../../components/board/BoardComponent";

import { baseURL } from "../home/HomeContainer";

export const getAllBoard = async () => {
  const response = await axios({
    method: "GET",
    url: `${baseURL}/board`,
  });
  const result = response.data.data;
  return result;
};

export default function BoardContainer() {
  const [content, setContent] = useState({
    title: "",
    content: "",
    writer: "",
  });

  const [viewContent, setViewContent] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `${baseURL}/board`,
    }).then((response) => {
      const result = response.data.data;
      setViewContent(result);
    });
  }, [viewContent]);

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
    <BoardComponent
      content={content}
      viewContent={viewContent}
      getValue={getValue}
      changeContent={changeContent}
      submitContent={submitContent}
    />
  );
}
