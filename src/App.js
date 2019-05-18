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
  setNextView = view => {
    this.setState({
      currentView: view
    });
  };
  render() {
    return (
      <Root>
        {this.state.currentView === "start" && (
          <Start setNextView={this.setNextView} />
        )}
        {this.state.currentView === "scan" && <Scan />}
      </Root>
    );
  }
}

export default App;

const Root = styled.div`
  background-color: white;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
