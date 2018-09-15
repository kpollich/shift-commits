import * as React from "react";
import styled from "styled-components";

import Header from "../Header/Header";

interface IProps {
  children: React.ReactNode;
}

const AppWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const Layout: React.SFC<IProps> = ({ children }) => {
  return (
    <AppWrapper>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
    </AppWrapper>
  );
};

export default Layout;
