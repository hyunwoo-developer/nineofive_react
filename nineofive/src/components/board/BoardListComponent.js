import React from "react";
// import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { Link } from "react-router-dom";
// import { Button } from "reactstrap";
import styled from "styled-components";

const Div = styled.div`
  max-width: 55rem;
  margin: 4rem auto;
`;
const Table = styled.table`
  width: 100%;
  border: 1px solid #444;
  border-collapse: collapse;
  text-align: center;
`;
const Th = styled.th``;
const Tr = styled.tr`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  &:nth-child(odd) {
    background-color: #edf2ef;
  }
`;

const Td = styled.td`
  padding: 20px;
  margin-right: 5px;
`;
const Button = styled.button`
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: #000;
  background: #fff;
  cursor: pointer;
  font-weight: bold;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 4rem;
  line-height: 2.25rem;
  height: 2.25rem;
  font-size: 1rem;
  transition: background 0.5s ease-in-out, color 0.5s ease-in-out;

  &:hover {
    background: #03c75a;
    color: #fff;
  }
`;

export default function BoardListComponent({
  viewContent,
  removeContent,
  getIdx,
}) {
  return (
    <Div>
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
            <Tr key={element.boardIdx}>
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
                  // className="btn btn-danger"
                  onClick={() => {
                    removeContent(element.boardIdx);
                  }}
                >
                  삭제
                </Button>
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Div>
  );
}
