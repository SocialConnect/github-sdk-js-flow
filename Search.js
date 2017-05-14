// @flow

import { request, required } from './Client'

// flow types
import type { FetchOptions } from './Client';
import type {
    SearchIssuesResult,
    SearchRepositoriesResult,
} from './definitions';

type searchIssuesParams = {
    q: string,
}

export function searchIssues(
    params: searchIssuesParams,
    options:? FetchOptions
): Promise<SearchIssuesResult> {
    return request(`/search/issues`, params, "GET", options);
}

type searchRepositoriesParams = {
    q: string,
}

export function searchRepositories(
    params: searchRepositoriesParams,
    options:? FetchOptions
): Promise<SearchRepositoriesResult> {
    return request(`/search/repositories`, params, "GET", options);
}
