import * as React from "react";
import IRepository from "../../interfaces/IRepository";

function Repository(props: IRepository) {
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
