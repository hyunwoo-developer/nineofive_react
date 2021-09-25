import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border: 1px solid #444;
  border-collapse: collapse;
`;
const Th = styled.th`
  border: 1px solid #444;
`;
const Td = styled.td`
  border: 1px solid #444;
`;
export default function Board({
  content,
  viewContent,
  getValue,
  changeContent,
  submitContent,
}) {
  return (
    <>
      <h1>게시판</h1>
      <Table>
        <thead>
          <tr>
            <Th>제목</Th>
            <Th>내용</Th>
            <Th>글쓴이</Th>
          </tr>
        </thead>
        <tbody>
          {viewContent.map((element) => (
            <tr key={element.boardIdx}>
              <Td>{element.title}</Td>
              <Td>{element.content}</Td>
              <Td>{element.writer}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
      <br />
      <br />
      <h1>글쓰기</h1>
      <div>
        <input
          type="text"
          placeholder="제목"
          onChange={getValue}
          name="title"
          value={content.title}
        />
        <input
          type="text"
          placeholder="글쓴이"
          onChange={getValue}
          name="writer"
          value={content.writer}
        />
        <CKEditor
          editor={ClassicEditor}
          data="content"
          onReady={(editor) => {}}
          onChange={(event, editor) => {
            changeContent(event, editor);
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus", editor);
          }}
        />
      </div>
      <button onClick={submitContent}>입력</button>
    </>
  );
}
