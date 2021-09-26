import React from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "reactstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
    ["clean"],
  ],
};

const formats = [
  //'font',
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "align",
  "color",
  "background",
];

export default function BoardWriteComponent({
  text,
  getValue,
  changeContent,
  submitContent,
}) {
  const { title, content } = text;

  return (
    <Form onSubmit={submitContent}>
      <h1>글쓰기</h1>
      <div>
        <Input
          type="text"
          placeholder="제목"
          onChange={getValue}
          name="title"
        />

        <div>
          <ReactQuill
            style={{ height: "500px" }}
            theme="snow"
            modules={modules}
            formats={formats}
            onChange={(content, delta, source, editor) => {
              changeContent(editor.getText());
            }}
            placeholder="내용을 입력해주세요"
          />
          <br />
          <br />
          <Input
            type="text"
            placeholder="글쓴이"
            onChange={getValue}
            name="writer"
          />
          <br />
        </div>
      </div>
      <Button type="submit">작성</Button>
      <Link to="/board" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
}
