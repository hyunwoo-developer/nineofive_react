import axios from "axios";
import React, { useEffect, useState } from "react";
import TodosHeaderComponent from "../../components/todos/TodosHeaderComponent";
import { baseURL } from "../home/HomeContainer";

export const getAllData = async () => {
  const response = await axios({
    method: "GET",
    url: `${baseURL}/todos`,
  });
  const result = response.data.data;
  return result;
};

export default function HeaderContainer() {
  // 기본 데이터(객체) 배열
  const [todoArray, setTodoArray] = useState([]);

  // 기본 데이터 배열의 추가/삭제를 위한 객체 변수
  const [todoInput, setTodoInput] = useState({
    content: "",
  });

  // useEffect(() => {
  //   console.log("최초 1회 실행");
  // url: todos
  // method: GET

  //   axios({
  //     method: "GET",
  //     url: `${baseURL}/todos`,
  //   })
  //     .then((response) => {
  //       const result = response.data.data;
  //       console.log(result);
  //       setTodoArray(result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  const { content } = todoInput;

  const changeTodo = (e) => {
    const { name, value } = e.target;

    setTodoInput({
      ...todoInput,
      [name]: value,
    });
  };

  const addTodo = async () => {
    const newTodo = {
      content: content,
    };

    try {
      const response = await axios({
        method: "POST",
        url: `${baseURL}/todos`,
        data: newTodo,
      });

      if (response.status === 200) {
        const result = await getAllData();
        setTodoArray(result);
        setTodoInput({
          content: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TodosHeaderComponent
      content={content}
      changeTodo={changeTodo}
      addTodo={addTodo}
    />
  );
}
