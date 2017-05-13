// @flow

import { request, required } from './Client'

// flow types
import type { FetchOptions } from './Client';
import type {
    IssueEntity,
    RepositoryEntity,
} from './definitions';

type searchIssuesParams = {
    q: string,
}

export function searchIssues(
    params: searchIssuesParams,
    options:? FetchOptions
): Promise<Array<IssueEntity>> {
    return request(`/search/issues`, params, "GET", options);
}

type searchRepositoriesParams = {
    q: string,
}

export function searchRepositories(
    params: searchRepositoriesParams,
    options:? FetchOptions
): Promise<Array<RepositoryEntity>> {
    return request(`/search/repositories`, params, "GET", options);
}
