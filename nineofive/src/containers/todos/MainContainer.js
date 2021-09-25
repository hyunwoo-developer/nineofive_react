import React, { useEffect, useState } from "react";
import TodoMainComponent from "../../components/todos/TodoMainComponent";
import TodoStatusComponent from "../../components/todos/TodoStatusComponent";
import TodoListComponent from "../../components/todos/TodoListComponent";
import { baseURL } from "../home/HomeContainer";
import axios from "axios";
import { getAllData } from "./HeaderContainer";

export default function MainContainer() {
  // 기본 데이터(객체) 배열
  const [todoArray, setTodoArray] = useState([]);

  // 기본 데이터 배열의 추가/삭제를 위한 객체 변수
  const [todoInput, setTodoInput] = useState({
    content: "",
  });
  useEffect(() => {
    console.log("최초 1회 실행");
    // url: todos
    // method: GET

    axios({
      method: "GET",
      url: `${baseURL}/todos`,
    })
      .then((response) => {
        const result = response.data.data;
        setTodoArray(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const { content } = todoInput;

  const removeTodo = async (todosIdx) => {
    try {
      const response = await axios({
        method: "DELETE",
        url: `${baseURL}/todos/${todosIdx}`,
      });

      if (response.status === 200) {
        const result = await getAllData();
        setTodoArray(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TodoMainComponent>
      <TodoListComponent
        todoArray={todoArray}
        removeTodo={removeTodo}
        setTodoArray={setTodoArray}
      />
      <TodoStatusComponent todoArray={todoArray} />
    </TodoMainComponent>
  );
}
