function TodosHeaderComponent({ content, changeTodo, addTodo }) {
    return (
        <div>
            <div>
                <h1>TODO</h1>
                <div>
                    <button type="button" onClick={addTodo}>
                        <img src="header_add.svg" alt="" />
                    </button>
                    <input
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
                    ></input>
                </div>
            </div>
        </div>
    );
}

export default TodosHeaderComponent;
