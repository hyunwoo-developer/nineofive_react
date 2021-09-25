import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "../containers/board/Main";
import WriteBoard from "../containers/board/WriteBoard";
// import EditBoard from "../containers/board/EditBoard";
import styled from "styled-components";
const Div = styled.div`
  max-width: 40rem;
  margin: 4rem auto;
`;

export default function Board() {
  return (
    <Div>
      <Route exact path="/board" component={Main} />
      <Route exact path="/board/:boardIdx" component={WriteBoard} />
      {/* <Route path="/board/edit/:boardIdx" component={EditBoard} /> */}
    </Div>
  );
}
