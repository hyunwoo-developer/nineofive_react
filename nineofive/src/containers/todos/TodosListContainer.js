import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { baseURL } from "../home/HomeContainer";
import { getAllData } from "./TodosContainer";
import styled from "styled-components";
import { FaMinusCircle } from "react-icons/fa";
const TodoList = styled.li`
    padding: 5px;
    /* padding-bottom: 5px; */
    background-color: aliceblue;
    display: flex;
    align-items: center;
    /* border-bottom: 1px solid #aaaaaa; */
`;

const CheckBox = styled.input`
    margin-right: 10px;
    background: none;
    border: none;
    width: 24px;
    height: 24px;
    margin: 0 15px 0 0;
    cursor: pointer;
    border: 1px solid skyblue;
    color: skyblue;
    padding: 5px;
    box-sizing: border-box;
    &:focus {
        ouline: 0;
    }
    &:hover {
        background: rgba(0, 183, 255, 0.9);
        cursor: pointer;
        color: white;
    }
`;

const TodoMark = styled.mark`
    width: 100%;
    height: 40px;
    line-height: 33px;
    background-color: transparent;
    border-radius: 4px;
    border: 2px solid #aaaaaa;
`;

const TodoEdit = styled.input`
    width: 100%;
    height: 40px;
    line-height: 33px;
    background-color: transparent;
    border-radius: 4px;
    border: 2px solid #aaaaaa;
`;

const DeleteBtn = styled.button`
    border: none;
    border-radius: 40px;
    line-height: 1rem;
    background-color: #db552c;
    margin-left: 10px;
    height: 40px;
    width: 40px;
    &:hover {
        background-color: #fc7723;
    }
`;

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
        <TodoList>
            <CheckBox
                type="checkbox"
                checked={todo.checked}
                onChange={() => {
                    onChangeChecked(todo.todosIdx, todo.checked);
                }}
            />
            {edited ? (
                <TodoEdit
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
                <TodoMark onClick={onClickEdit}>{todo.content}</TodoMark>
            )}
            <DeleteBtn
                type="button"
                onClick={function () {
                    return removeTodo(todo.todosIdx);
                }}
            >
                <FaMinusCircle />
            </DeleteBtn>
        </TodoList>
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
