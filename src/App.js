import React from "react";
import styled from "styled-components";

import Scan from "./Scan";
import Start from "./Start";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "start"
    };
  }
  nextView = view => {
    this.setState({
      currentView: view
    });
  };
  render() {
    return (
      <Root>
        {this.state.currentView === "start" && <Start />}
        {this.state.currentView === "scan" && <Scan />}
      </Root>
    );
  }
}

export default App;

const Root = styled.div`
  background-color: white;
`;

const Button = styled.div``;
