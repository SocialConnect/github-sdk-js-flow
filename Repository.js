// @flow

import { request, required } from './Client'

// flow types
import type { FetchOptions } from './Client';
import type {
    RepositoryEntity,
} from './definitions';

type getRepositoryParams = {
}

export function getRepository(
    owner: string = required("owner"),
    repo: string = required("repo"),
    params: getRepositoryParams,
    options:? FetchOptions
): Promise<RepositoryEntity> {
    return request(`/repos/${owner}/${repo}`, params, "GET", options);
}
