import * as React from "react";
import { Query } from "react-apollo";
import ICommit from "../../interfaces/ICommit";
import IRepository from "../../interfaces/IRepository";
import RECENT_COMMITS_QUERY from "../../queries/RecentCommits";
import Repository from "../Repository/Repository";
import {
  RecentCommits,
  RecentCommits_organization_repositories_edges as RepositoryEdge,
  RecentCommits_organization_repositories_edges_node_defaultBranchRef_target_Commit as RefCommit,
  RecentCommits_organization_repositories_edges_node_defaultBranchRef_target_Commit_history_edges as HistoryEdge
} from "./__generated__/RecentCommits";

class RecentCommitsQuery extends Query<RecentCommits> {}

const CommitList: React.SFC<{}> = () => {
  return (
    <RecentCommitsQuery query={RECENT_COMMITS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) {
          return <div>Loading...</div>;
        }

        if (error || !data) {
          return <div>Error fetching commits</div>;
        }

        const repositories: IRepository[] = getRepositories(
          data!.organization!.repositories!.edges || []
        );

        return (
          <div>
            {repositories.map(repo => (
              <Repository key={repo.name} {...repo} />
            ))}
          </div>
        );
      }}
    </RecentCommitsQuery>
  );
};

function isRefCommit(target: any): target is RefCommit {
  return target.history !== undefined;
}

function getRepositories(data: Array<RepositoryEdge | null>): IRepository[] {
  return data.reduce((acc, edge) => {
    if (!edge || !edge.node) {
      return acc;
    }

    const { node } = edge;

    if (!node.defaultBranchRef || !isRefCommit(node.defaultBranchRef.target)) {
      return acc;
    }

    const commits = node.defaultBranchRef.target.history.edges
      ? getCommits(node.defaultBranchRef.target.history.edges)
      : [];

    acc.push({
      commits,
      name: node.name
    });

    return acc;
  }, new Array<IRepository>());
}

function getCommits(data: Array<HistoryEdge | null>): ICommit[] {
  return data.reduce((acc, edge) => {
    if (!edge || !edge.node) {
      return acc;
    }

    acc.push({
      author: {
        login: edge.node.author!.user!.login,
        url: edge.node.author!.user!.url as string
      },
      message: edge.node.message,
      url: edge.node.commitUrl
    });

    return acc;
  }, new Array<ICommit>());
}

export default CommitList;
