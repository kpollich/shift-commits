import gql from "graphql-tag";
import * as React from "react";
import { Query } from "react-apollo";
import Repository from "../Repository/Repository";
import {
  RecentCommits,
  RecentCommits_organization_repositories_edges_node_defaultBranchRef_target_Commit as RefCommit
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
            {data.organization!.repositories!.edges!.map(repositoryEdge => {
              if (!repositoryEdge || !repositoryEdge.node) {
                return null;
              }

              const { node } = repositoryEdge;

              if (
                !node.defaultBranchRef ||
                !isRefCommit(node.defaultBranchRef.target)
              ) {
                return null;
              }

              const commits = node.defaultBranchRef.target.history.edges!.map(
                edge => {
                  if (!edge || !edge.node) {
                    return null;
                  }

                  return {
                    author: {
                      login: edge.node.author!.user!.login,
                      url: edge.node.author!.user!.url as string
                    },
                    message: edge.node.message,
                    url: edge.node.commitUrl
                  };
                }
              );

              return (
                <Repository
                  key={node.name}
                  name={node.name}
                  commits={commits}
                />
              );
            })}
          </div>
        );
      }}
    </RecentCommitsQuery>
  );
}

function isRefCommit(target: any): target is RefCommit {
  return target.history !== undefined;
}

export default CommitList;
