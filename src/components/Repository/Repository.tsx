import * as React from "react";
import styled from "styled-components";
import IRepository from "../../interfaces/IRepository";
import CommitCard from "../CommitCard/CommitCard";

const CommitsUl = styled.ul`
  list-style: none;
  padding: 0;
`;

function Repository(props: IRepository) {
  const { name, commits } = props;

  return (
    <div>
      <h1>{name}</h1>

      <CommitsUl>
        {commits &&
          commits.map(commit => {
            if (!commit) {
              return null;
            }

            return (
              <li key={commit.message}>
                <CommitCard {...commit} />
              </li>
            );
          })}
      </CommitsUl>
    </div>
  );
}

export default Repository;
