// @flow

import { request } from './Client'

// flow types
import type { FetchOptions } from './Client';
import type {
    RepositoryEntity,
} from './definitions';

    
type getRepositoryParams = {
    owner: string,
    repo: string,
}

export function getRepository(params: getRepositoryParams, options:? FetchOptions): Promise<RepositoryEntity> {
    if (params["owner"] == null) {
        throw new Error("Missing required parameter owner when calling getRepository");
    }
    if (params["repo"] == null) {
        throw new Error("Missing required parameter repo when calling getRepository");
    }

    const baseUrl = `/repos/${params.owner}/${params.repo}`;
    delete params.owner;
    delete params.repo;

    return request(baseUrl, params, "GET", options);
}
