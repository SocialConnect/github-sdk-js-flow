// @flow

import { request } from './Client'

// flow types
import type { FetchOptions } from './Client';
import type {
    UserEntity,
} from './definitions';

    
type getUserByIdParams = {
    id: string,
}

export function getUserById(params: getUserByIdParams, options:? FetchOptions): Promise<UserEntity> {
    if (params["id"] == null) {
        throw new Error("Missing required parameter id when calling getUserById");
    }

    const baseUrl = `/users/{id}`.replace(`{${"id"}}`, `${params.id}`);
    delete params.id;

    return request(baseUrl, params, "GET", options);
}
    
type getUserParams = {
}

export function getUser(params: getUserParams, options:? FetchOptions): Promise<UserEntity> {
    const baseUrl = "/user";

    return request(baseUrl, params, "GET", options);
}
    
type getUsersParams = {
    since: string,
}

export function getUsers(params: getUsersParams, options:? FetchOptions): Promise<Array<UserEntity>> {
    const baseUrl = "/users";

    return request(baseUrl, params, "GET", options);
}
    
type getRepositoriesByUsernameParams = {
    username: string,
    type?: "all" | "owner" | "member",
    sort?: "created" | "updated" | "pushed" | "full_name",
    direction?: "asc" | "desc",
}

export function getRepositoriesByUsername(params: getRepositoriesByUsernameParams, options:? FetchOptions): Promise<Array<UserEntity>> {
    if (params["username"] == null) {
        throw new Error("Missing required parameter username when calling getRepositoriesByUsername");
    }

    const baseUrl = `/users/{username}/repos`.replace(`{${"username"}}`, `${params.id}`);
    delete params.id;

    return request(baseUrl, params, "GET", options);
}
