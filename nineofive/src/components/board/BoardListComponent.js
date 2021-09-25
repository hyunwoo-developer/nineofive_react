import React from "react";
// import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
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

export default function BoardListComponent({
  viewContent,
  removeContent,
  getIdx,
}) {
  return (
    <Table>
      <thead>
        <tr>
          <Th>글번호</Th>
          <Th>제목</Th>
          <Th>내용</Th>
          <Th>글쓴이</Th>
          <Th>작성일</Th>
          <Th></Th>
        </tr>
      </thead>
      <tbody>
        {viewContent.map((element) => (
          <tr key={element.boardIdx}>
            <Td>{element.boardIdx}</Td>
            <Td>{element.title}</Td>
            <Td>{element.content}</Td>
            <Td>{element.writer}</Td>
            <Td>{element.writeTime}</Td>
            {/* <Td>
              <Link
                className="btn btn-primary"
                to="/board/edit/1"
                onClick={() => {
                  getIdx(element.boardIdx);
                }}
              >
                수정
              </Link>
            </Td> */}
            <Td>
              <Button
                className="btn btn-danger"
                onClick={() => {
                  removeContent(element.boardIdx);
                }}
              >
                삭제
              </Button>
            </Td>
          </tr>
        ))}
      </tbody>
    </Table>
    // <div>
    //   <Link className="btn btn-warning" to="/board/edit/1">
    //     Edit
    //   </Link>
    //   <Button color="danger">Delete</Button>
    // </div>
  );
}
