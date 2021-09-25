import styled from "styled-components";
import { FaPlusCircle } from "react-icons/fa";
const TodoHeader = styled.div`
    width: 640px;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
`;

const TodoTitle = styled.h1`
    padding-top: 50px;
    color: orange;
`;

const TodoControl = styled.div`
    display: flex;
    align-items: center;
    width: 640px;
    box-sizing: border-box;
`;

const TodoBtn = styled.button`
    border: 2px solid #aaaaaa;
    border-radius: 4px;
    background-color: #03c75a;
    height: 40px;
    width: 40px;
    margin-right: 10px;
    &:hover {
        background-color: #88f026;
    }
`;

const TodoInput = styled.input`
    font-size: 12pt;
    border: 2px solid #aaaaaa;
    border-radius: 4px;
    outline: none;
    padding: 8px;
    box-sizing: border-box;
    height: 40px;
    width: 100%;
`;

function TodosHeaderComponent({ content, changeTodo, addTodo }) {
    return (
        <TodoHeader>
            <TodoTitle>TODO</TodoTitle>
            <TodoControl>
                <TodoBtn type="button" onClick={addTodo}>
                    <FaPlusCircle />
                </TodoBtn>
                <TodoInput
                    type="text"
                    placeholder="할 일을 입력해주세요."
                    onChange={changeTodo}
                    value={content}
                    name="content"
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            addTodo();
                        }
                    }}
                ></TodoInput>
            </TodoControl>
        </TodoHeader>
    );
}

export default TodosHeaderComponent;
