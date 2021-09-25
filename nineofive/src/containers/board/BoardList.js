import axios from "axios";
import React, { useEffect, useState } from "react";
import BoardListComponent from "../../components/board/BoardListComponent";
import { baseURL } from "../home/HomeContainer";
import { getAllBoard } from "./WriteBoard";
export let idx = 0;

export default function BoardList() {
  const [viewContent, setViewContent] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: `${baseURL}/board`,
    }).then((response) => {
      const result = response.data.data;
      setViewContent(result);
    });
  }, []);
  const removeContent = async (boardIdx) => {
    try {
      const response = await axios({
        method: "DELETE",
        url: `${baseURL}/board/${boardIdx}`,
      });
      if (response.status === 200) {
        const result = await getAllBoard();
        setViewContent(result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getIdx = (boardIdx) => {
    idx = boardIdx;
  };

  return (
    <BoardListComponent
      viewContent={viewContent}
      removeContent={removeContent}
      getIdx={getIdx}
    />
  );
}
