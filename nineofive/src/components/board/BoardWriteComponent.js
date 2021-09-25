import React from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function BoardWriteComponent({
  content,
  getValue,
  changeContent,
  submitContent,
}) {
  return (
    <Form>
      <h1>글쓰기</h1>
      <div>
        <Input
          type="text"
          placeholder="제목"
          onChange={getValue}
          name="title"
          value={content.title}
        />
        <CKEditor
          editor={ClassicEditor}
          data="content"
          onReady={(editor) => {
            console.log("Editor is ready to use!", editor);
          }}
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
        <Input
          type="text"
          placeholder="글쓴이"
          onChange={getValue}
          name="writer"
          value={content.writer}
        />
      </div>
      <Button onClick={submitContent}>작성</Button>
      <Link to="/board" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
}
