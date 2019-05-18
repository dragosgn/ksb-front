import React from "react";
import styled from "styled-components";

import { Button } from "./styled";

export default ({ setNextView }) => (
  <Root>
    <Button onClick={() => setNextView("scan")}>Start Scan</Button>
  </Root>
);

const Root = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  justify-items: flex-end;
`;
