import axios from "axios";
import React, { useEffect, useState } from "react";
import BoardEditComponent from "../../components/board/BoardEditComponent";
import { baseURL } from "../home/HomeContainer";
import { idx } from "./BoardList";
import { getAllBoard } from "./WriteBoard";
export default function EditBoard() {
  const [array, setArray] = useState([]);

  const [content, setContent] = useState({
    title: "",
    content: "",
    writer: "",
  });

  const getValue = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setContent({
      ...content,
      [name]: value,
    });
  };

  const changeContent = (event, editor) => {
    const data = editor.getData();
    console.log(data);
    setContent({
      ...content,
      content: data,
    });
  };

  useEffect(() => {
    axios({
      method: "GET",
      url: `${baseURL}/board/${idx}`,
    })
      .then((response) => {
        const result = response.data.data;
        setArray(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const submitContent = async () => {
    try {
      // const newContent = {
      //   title: "",
      //   content: "",
      //   writer: "",
      // };
      const response = await axios({
        method: "PUT",
        url: `${baseURL}/board/${idx}`,
        data: content,
      });
      if (response.status === 200) {
        const result = await getAllBoard();
        setArray(result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BoardEditComponent
      array={array}
      content={content}
      setContent={setContent}
      getValue={getValue}
      changeContent={changeContent}
      submitContent={submitContent}
    />
  );
}
