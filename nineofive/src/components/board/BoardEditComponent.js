import React from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function BoardEditComponent({
  array,
  content,
  setContent,
  getValue,
  changeContent,
  submitContent,
}) {
  return (
    <Form>
      <h1>글수정</h1>
      <div>
        {array &&
          array.map((item) => {
            return (
              <>
                <Input
                  type="text"
                  name="title"
                  value={item.title}
                  onChange={getValue}
                />
                <Input
                  type="text"
                  name="writer"
                  value={item.writer}
                  onChange={getValue}
                />
                <CKEditor
                  name="content"
                  editor={ClassicEditor}
                  data={item.content}
                  onReady={(editor) => {}}
                  onChange={(event, editor) => {
                    changeContent(event, editor);
                  }}
                />
              </>
            );
          })}
      </div>
      <Button onClick={submitContent}>수정</Button>
      <Link to="/board" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
}
