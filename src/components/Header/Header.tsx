import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 5rem;
  width: 100%;
  background-color: #ffd200;

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 0;
  }
`;

const Header: React.SFC<{}> = () => (
  <Wrapper>
    <h1>Shift Commits</h1>
  </Wrapper>
);

export default Header;
