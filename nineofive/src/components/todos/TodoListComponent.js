import React from "react";
import TodoItemComponent from "./TodoItemComponent";

export default function TodoListComponent({
  todoArray,
  removeTodo,
  setTodoArray,
}) {
  return (
    <section>
      <ul>
        {todoArray.map(function (todo) {
          return (
            <TodoItemComponent
              todo={todo}
              key={todo.todosIdx}
              removeTodo={removeTodo}
              setTodoArray={setTodoArray}
            />
          );
        })}
      </ul>
    </section>
  );
}
