// @flow

import { request, required } from './Client'

// flow types
import type { FetchOptions } from './Client';
import type {
    AuthorizationEntity,
} from './definitions';

type createAuthorizationParams = {
    scopes?: Array<any>,
    note: string,
    note_url?: string,
    client_id?: string,
    client_secret?: string,
    fingerprint?: string,
}

export function createAuthorization(
    params: createAuthorizationParams,
    options?: FetchOptions
): Promise<AuthorizationEntity> {
    return request(`/authorizations`, params, "POST", options);
}

type deleteAuthorizationParams = {
}

export function deleteAuthorization(
    id: number = required("id"),
    params: deleteAuthorizationParams,
    options?: FetchOptions
): Promise<any> {
    return request(`/authorizations/${id}`, params, "DELETE", options);
}
