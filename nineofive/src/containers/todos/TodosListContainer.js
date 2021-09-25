import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { baseURL } from "../home/HomeContainer";
import { getAllData } from "./TodosContainer";

function TodosList({ todo, removeTodo, setTodoArray }) {
    const editInputRef = useRef(null);

    const [edited, setEdited] = useState(false);
    const [newText, setNewText] = useState(todo.content);

    useEffect(() => {
        if (edited) {
            editInputRef.current.focus();
        }
    }, [edited]);

    const onClickEdit = () => {
        setEdited(true);
    };

    const onChangeEditInput = (event) => {
        const { name, value } = event.target;
        setNewText(value);
    };

    const onPressSubmit = async (todosIdx) => {
        try {
            const response = await axios({
                method: "PUT",
                url: `${baseURL}/todos/${todosIdx}`,
                data: {
                    content: newText,
                },
            });
            if (response.status === 200) {
                const result = await getAllData();
                setTodoArray(result);
                setEdited(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const onChangeChecked = async (todosIdx, checked) => {
        const response = await axios({
            method: "PUT",
            url: `${baseURL}/todos/${todosIdx}`,
            data: {
                content: todo.content,
                checked: !checked,
            },
        });
        if (response.status === 200) {
            const result = await getAllData();
            setTodoArray(result);
        }
    };

    return (
        <li>
            <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => {
                    onChangeChecked(todo.todosIdx, todo.checked);
                }}
            />
            {edited ? (
                <input
                    ref={editInputRef}
                    value={newText}
                    onChange={onChangeEditInput}
                    onKeyPress={(event) => {
                        if (event.key === "Enter") {
                            onPressSubmit(todo.todosIdx);
                        }
                    }}
                />
            ) : (
                <mark onClick={onClickEdit}>{todo.content}</mark>
            )}
            <button
                type="button"
                onClick={function () {
                    return removeTodo(todo.todosIdx);
                }}
            >
                <img src="header_add.svg" alt="" />
            </button>
        </li>
    );
}

function TodosListContainer({ todoArray, removeTodo, setTodoArray }) {
    return (
        <section>
            <ul>
                {todoArray.map(function (todo) {
                    return (
                        <TodosList
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

export default TodosListContainer;
