// @flow

import { request } from './Client'

// flow types
import type { FetchOptions } from './Client';
import type {
    RepositoryEntity,
} from './definitions';

    
type getRepositoryParams = {
    id: string,
}

export function getRepository(params: getRepositoryParams, options:? FetchOptions): Promise<RepositoryEntity> {
    if (params["id"] == null) {
        throw new Error("Missing required parameter id when calling getRepository");
    }

    const baseUrl = `/repos/{id}`.replace(`{${"id"}}`, `${params.id}`);
    delete params.id;

    return request(baseUrl, params, "GET", options);
}
