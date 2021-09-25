import styled from "styled-components";

const TodoStatus = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
`;

const TodoRemain = styled.div`
    margin-left: 5px;
    font-size: 14pt;
`;

const TodoBtn = styled.button`
    height: 40px;
    margin-right: 5px;
    margin-left: 5px;
    border: 2px solid #aaaaaa;
    border-radius: 4px;
    outline: none;
`;

function TodoStatusComponent({ todoArray }) {
    return (
        <TodoStatus>
            <TodoRemain>{todoArray.length}개 남음</TodoRemain>
            <div>
                <TodoBtn type="button">전체목록</TodoBtn>
                <TodoBtn type="button">남은목록</TodoBtn>
                <TodoBtn type="button">완료목록</TodoBtn>
            </div>
            <div>
                <TodoBtn type="button">완료목록삭제</TodoBtn>
            </div>
        </TodoStatus>
    );
}

export default TodoStatusComponent;
