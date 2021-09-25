function TodoStatusComponent({ todoArray }) {
    return (
        <div>
            <div>
                <div>{todoArray.length}개 남음</div>
                <div>
                    <button type="button">전체목록</button>
                    <button type="button">남은목록</button>
                    <button type="button">완료목록</button>
                </div>
                <div>
                    <button type="button">완료목록삭제</button>
                </div>
            </div>
        </div>
    );
}

export default TodoStatusComponent;
