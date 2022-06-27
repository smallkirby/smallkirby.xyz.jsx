import type { RepositoryInfo, LanguageOccupation, RepoBasicInfo } from 'typings/github';
import { Octokit } from 'octokit';

const langs2occupation = (data: any) => {
  let totalLines = 0;
  const langOccupations: LanguageOccupation[] = [];
  for (const prop in data) {
    if (Object.prototype.hasOwnProperty.call(data, prop)) {
      totalLines += data[prop];
    }
  }
  for (const prop in data) {
    if (Object.prototype.hasOwnProperty.call(data, prop)) {
      langOccupations.push({
        lang: prop,
        lines: data[prop],
        ratio: data[prop] / totalLines,
      });
    }
  }

  return langOccupations;
};

export const url2info = (url: string): RepoBasicInfo | null => {
  const re = /https:\/\/github\.com\/([a-zA-Z0-9]*)\/([a-zA-Z0-9/-/.]*).*/;
  const found = url.match(re);
  if (!found || found.length !== 3) {
    return null;
  } else {
    return {
      owner: found[1],
      reponame: found[2],
    };
  }
};

export const getRepoInfo = async (owner: string, repo: string): Promise<RepositoryInfo | null> =>{
  const octokit = new Octokit();
  const repoResult = await octokit.request('GET /repos/{owner}/{repo}', { owner, repo })
    .catch(() => Promise.resolve(null));
  const contributorsResult = await octokit.request('GET /repos/{owner}/{repo}/contributors', { owner, repo })
    .catch(() => Promise.resolve(null));
  const languageResult = await octokit.request('GET /repos/{owner}/{repo}/languages', { owner, repo })
    .catch(() => Promise.resolve(null));
  if (
    repoResult === undefined ||
    repoResult === null ||
    contributorsResult === undefined ||
    contributorsResult == null) {
    return null;
  }

  const repoData = repoResult.data;
  const contData = contributorsResult.data;
  const languages = languageResult?.data;
  const totalCommits = contData.reduce((s, contributor) => {
    return s + contributor.contributions;
  }, 0);

  return {
    subscribersCount: repoData.subscribers_count,
    updatedAt: new Date(repoData.updated_at),
    stargazers_count: repoData.stargazers_count,
    forks: repoData.forks_count,
    languages: langs2occupation(languages),
    totalCommits,
  };
};
