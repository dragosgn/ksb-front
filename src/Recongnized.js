import React from "react";
import styled from "styled-components";

const Root = styled.div`
  width: 100%;
  height: 100%;
`;

const Main = styled.div`
  padding: 1rem;
  border: 1px solid palevioletred;
  border-radius: 1px;
`;

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  padding: 1rem;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const YesButton = styled.div`
  color: white;
  background-color: green;
  border-radius: 1rem;
  border: 1px solid transaparent;
  padding: 0.5rem;
  text-align: center;
`;

const NoButton = styled.div`
  color: white;
  background-color: green;
  border-radius: 1rem;
  border: 1px solid transaparent;
  padding: 0.5rem;
  text-align: center;
`;

export default ({ currentView, setCurrentView }) => (
  <Root>
    <Main>
      <p>Recognized</p>
      <ItemList>
        <Item>Model: 200912-123-1312</Item>
        <Item>Model: 200912-123-1312</Item>
        <Item>Model: 200912-123-1312</Item>
      </ItemList>
      <ButtonRow>
        <YesButton onClick={() => setCurrentView("scan")}>Yes</YesButton>
        <NoButton>No</NoButton>
      </ButtonRow>
    </Main>
  </Root>
);
