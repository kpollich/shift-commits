/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: RecentCommits
// ====================================================

export interface RecentCommits_organization_repositories_edges_node_defaultBranchRef_target_Tree {}

export interface RecentCommits_organization_repositories_edges_node_defaultBranchRef_target_Commit_history_edges_node_author_user {
  /**
   * The username used to login.
   */
  login: string;
  /**
   * A URL pointing to the user's public avatar.
   */
  avatarUrl: any;
  /**
   * The HTTP URL for this user
   */
  url: any;
}

export interface RecentCommits_organization_repositories_edges_node_defaultBranchRef_target_Commit_history_edges_node_author {
  /**
   * The GitHub user corresponding to the email field. Null if no such user exists.
   */
  user: RecentCommits_organization_repositories_edges_node_defaultBranchRef_target_Commit_history_edges_node_author_user | null;
}

export interface RecentCommits_organization_repositories_edges_node_defaultBranchRef_target_Commit_history_edges_node {
  /**
   * The Git commit message
   */
  message: string;
  /**
   * The HTTP URL for this Git object
   */
  commitUrl: any;
  /**
   * Authorship details of the commit.
   */
  author: RecentCommits_organization_repositories_edges_node_defaultBranchRef_target_Commit_history_edges_node_author | null;
}

export interface RecentCommits_organization_repositories_edges_node_defaultBranchRef_target_Commit_history_edges {
  /**
   * The item at the end of the edge.
   */
  node: RecentCommits_organization_repositories_edges_node_defaultBranchRef_target_Commit_history_edges_node | null;
}

export interface RecentCommits_organization_repositories_edges_node_defaultBranchRef_target_Commit_history {
  edges: (RecentCommits_organization_repositories_edges_node_defaultBranchRef_target_Commit_history_edges | null)[] | null;
}

export interface RecentCommits_organization_repositories_edges_node_defaultBranchRef_target_Commit {
  /**
   * The linear commit history starting from (and including) this commit, in the same order as `git log`.
   */
  history: RecentCommits_organization_repositories_edges_node_defaultBranchRef_target_Commit_history;
}

export type RecentCommits_organization_repositories_edges_node_defaultBranchRef_target = RecentCommits_organization_repositories_edges_node_defaultBranchRef_target_Tree | RecentCommits_organization_repositories_edges_node_defaultBranchRef_target_Commit;

export interface RecentCommits_organization_repositories_edges_node_defaultBranchRef {
  /**
   * The object the ref points to.
   */
  target: RecentCommits_organization_repositories_edges_node_defaultBranchRef_target;
}

export interface RecentCommits_organization_repositories_edges_node {
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The Ref associated with the repository's default branch.
   */
  defaultBranchRef: RecentCommits_organization_repositories_edges_node_defaultBranchRef | null;
}

export interface RecentCommits_organization_repositories_edges {
  /**
   * The item at the end of the edge.
   */
  node: RecentCommits_organization_repositories_edges_node | null;
}

export interface RecentCommits_organization_repositories {
  /**
   * A list of edges.
   */
  edges: (RecentCommits_organization_repositories_edges | null)[] | null;
}

export interface RecentCommits_organization {
  /**
   * A list of repositories that the user owns.
   */
  repositories: RecentCommits_organization_repositories;
}

export interface RecentCommits {
  /**
   * Lookup a organization by login.
   */
  organization: RecentCommits_organization | null;
}
