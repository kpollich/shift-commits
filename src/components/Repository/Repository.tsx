import * as React from "react";
import ICommit from "../../interfaces/ICommit";

interface IRepositoryProps {
  name: string;
  commits: Array<ICommit | null>;
}

function Repository(props: IRepositoryProps) {
  const { name, commits } = props;

  return (
    <div>
      <h1>{name}</h1>

      <ul>
        {commits &&
          commits.map(commit => {
            if (!commit) {
              return null;
            }

            return (
              <li key={commit.message}>
                <div>"{commit.message}"</div>
                <span>
                  --
                  {commit.author.login}
                </span>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Repository;
