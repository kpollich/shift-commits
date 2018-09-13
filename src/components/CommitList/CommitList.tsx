import gql from "graphql-tag";
import * as React from "react";
import { Query } from "react-apollo";
import {
  RecentCommits,
  RecentCommits_organization_repositories_edges_node_defaultBranchRef_target_Commit
} from "./__generated__/RecentCommits";

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

              const { node } = edge;

              if (!node.defaultBranchRef) {
                return null;
              }

              const foo = node.defaultBranchRef.target.history;

              return (
                <div key={node.name}>
                  <h1>{node.name}</h1>
                </div>
              );
            })}
          </div>
        );
      }}
    </RecentCommitsQuery>
  );
}

export default CommitList;
