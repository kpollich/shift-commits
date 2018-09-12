import gql from "graphql-tag";
import * as React from "react";
import { Query } from "react-apollo";
import { RecentCommits } from "./__generated__/RecentCommits";

const RECENT_COMMITS_QUERY = gql`
  query RecentCommits {
    organization(login: "shiftlab") {
      repositories(first: 10, orderBy: { field: PUSHED_AT, direction: DESC }) {
        edges {
          node {
            name
            defaultBranchRef {
              target {
                ... on Commit {
                  history(first: 5) {
                    edges {
                      node {
                        message
                        commitUrl
                        author {
                          user {
                            login
                            avatarUrl
                            url
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

class RecentCommitsQuery extends Query<RecentCommits> {}

function CommitList() {
  return (
    <RecentCommitsQuery query={RECENT_COMMITS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) {
          return <div>Loading...</div>;
        }

        if (error) {
          return <div>Error fetching commits</div>;
        }

        if (!data) {
          return <div>No commits found :(</div>;
        }

        return (
          <div>
            {data.organization!.repositories!.edges!.map(edge => {
              if (!edge || !edge.node) {
                return null;
              }

              return <h1 key={edge.node.name}>{edge.node.name}</h1>;
            })}
          </div>
        );
      }}
    </RecentCommitsQuery>
  );
}

export default CommitList;
