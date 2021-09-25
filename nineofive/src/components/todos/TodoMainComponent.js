import styled from "styled-components";

const TodoMain = styled.main`
    width: 640px;
    padding-top: 25px;
    margin-left: auto;
    margin-right: auto;
`;

function TodoMainComponent({ children }) {
    return <TodoMain>{children}</TodoMain>;
}

export default TodoMainComponent;
