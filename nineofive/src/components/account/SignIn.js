import React from "react";
import styled from "styled-components";
const Template = styled.div`
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;
`;

const InputWrap = styled.div`
  color: #fff;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  font-size: 1.125rem;
  border: 2px solid #aaa;
  border-radius: 4px;
  outline: none;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
  &:focus {
    border-color: dodgerBlue;
    box-shadow: 0 0 8px 0 dodgerBlue;
  }
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
`;

const Msg = styled.span`
  color: red;
`;

export default function SignIn({ onLogin, onChangeAccount, msg }) {
  return (
    <Template>
      <h1>로그인</h1>
      <InputWrap>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          onChange={onChangeAccount}
        />
      </InputWrap>
      <InputWrap>
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          onChange={onChangeAccount}
        />
      </InputWrap>
      <Button onClick={onLogin}>로그인</Button>
      <hr />
      <div>
        <Msg>{msg}</Msg>
      </div>
    </Template>
  );
}
