import React from "react";
import styled, { injectGlobal } from "styled-components";
import { withStateHandlers } from "recompose";

import BB8 from "./BB8";

const enhancer = withStateHandlers(
  { turn: false },
  {
    toggle: ({ turn }) => () => ({ turn: !turn })
  }
);

injectGlobal`
  html {
    background: #444;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 2 * 8px);
`;

const App = ({ turn, toggle }) => (
  <Container onClick={toggle}>
    <BB8 turn={turn} />
  </Container>
);

export default enhancer(App);
