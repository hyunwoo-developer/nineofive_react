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
function SignUpComponent({
  onSignUp,
  onChangeName,
  onChangeEmail,
  onChangePassword,
  msg,
}) {
  return (
    <Template>
      <h1>회원 가입</h1>
      <InputWrap>
        <Input type="text" placeholder="name" onChange={onChangeName} />
      </InputWrap>
      <InputWrap>
        <Input type="email" placeholder="email" onChange={onChangeEmail} />
      </InputWrap>
      <InputWrap>
        <Input
          type="password"
          placeholder="password"
          onChange={onChangePassword}
        />
      </InputWrap>
      <Button onClick={onSignUp}>회원가입</Button>
      <hr />
      <div>
        <Msg>{msg}</Msg>
      </div>
    </Template>
  );
}
export default SignUpComponent;
