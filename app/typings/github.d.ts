export type RepoBasicInfo = {
  owner: string,
  reponame: string,
}

export type LanguageOccupation = {
  lang: string,
  ratio: number,
  lines?: number,
}

export type RepositoryInfo = {
  subscribersCount: number,
  forks: number,
  updatedAt: Date,
  stargazers_count: number,
  totalCommits: number,
  languages: LanguageOccupation[],
}
