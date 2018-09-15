import * as React from "react";
import styled from "styled-components";
import ICommit from "../../interfaces/ICommit";

const Wrapper = styled.div`
  border: 1px solid #dadada;
  margin: 1em 0;
`;

const CommitCard: React.SFC<ICommit> = props => {
  const { message } = props;
  return (
    <Wrapper>
      <p>{message}</p>
    </Wrapper>
  );
};

export default CommitCard;
