import gql from "graphql-tag";

export default gql`
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
