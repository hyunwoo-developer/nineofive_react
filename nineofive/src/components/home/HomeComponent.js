import React from "react";
import styled from "styled-components";

const Template = styled.div`
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  border-radius: 4px;
`;

const InputWrap = styled.div`
  width: 382px;
  color: #fff;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.div`
  height: 2rem;
  font-size: 1.5rem;
  display: flex;
  border: 2px solid #aaa;
  border-radius: 4px;
  outline: none;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #03c75a;
  cursor: pointer;
  margin-top: 30px;
  &:hover {
    background-color: black;
  }
`;
const Msg = styled.span`
  font-size: 3rem;
  color: orange;
`;

export default function HomeComponent({ msg, onLogout }) {
  return (
    <>
      <Template>
        <InputWrap>
          <Msg>{msg}</Msg>
        </InputWrap>
        <br />
        <Button onClick={onLogout}>로그아웃 😥</Button>
      </Template>
    </>
  );
}
