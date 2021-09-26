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
  const [text, setText] = useState({
    title: "",
    content: "",
    writer: "",
  });

  const [viewContent, setViewContent] = useState([]);

  const getValue = (event) => {
    const { name, value } = event.target;
    setText({
      ...text,
      [name]: value,
    });
  };

  const changeContent = (value) => {
    setText({
      ...text,
      content: value,
    });
  };

  const submitContent = async (event) => {
    try {
      const response = await axios({
        method: "POST",
        url: `${baseURL}/board`,
        data: text,
      });
      if (response.status === 200) {
        const result = await getAllBoard();
        setViewContent(result);
        setText({
          title: "",
          content: "",
          writer: "",
        });
        console.log("글작성 성공");
        document.location.href = "/board";
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BoardWriteComponent
      text={text}
      setText={setText}
      getValue={getValue}
      changeContent={changeContent}
      submitContent={submitContent}
    />
  );
}
