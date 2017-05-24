// @flow

import { request, required } from './Client'

// flow types
import type { FetchOptions } from './Client';
import type {
    UserEntity,
    PushEvent,
    OrganizationEntity,
} from './definitions';

type getUserFollowersParams = {
    page?: number,
    per_page?: number,
}

export function getUserFollowers(
    id: string = required("id"),
    params: getUserFollowersParams,
    options:? FetchOptions
): Promise<Array<UserEntity>> {
    return request(`/users/${id}/followers`, params, "GET", options);
}

type getUserFollowingParams = {
    page?: number,
    per_page?: number,
}

export function getUserFollowing(
    id: string = required("id"),
    params: getUserFollowingParams,
    options:? FetchOptions
): Promise<Array<UserEntity>> {
    return request(`/users/${id}/following`, params, "GET", options);
}

type getUserReceivedEventsParams = {
    page?: number,
    per_page?: number,
}

export function getUserReceivedEvents(
    id: string = required("id"),
    params: getUserReceivedEventsParams,
    options:? FetchOptions
): Promise<PushEvent> {
    return request(`/users/${id}/received_events`, params, "GET", options);
}

type getUserByIdParams = {
}

export function getUserById(
    id: string = required("id"),
    params: getUserByIdParams,
    options:? FetchOptions
): Promise<UserEntity> {
    return request(`/users/${id}`, params, "GET", options);
}

type getUserParams = {
}

export function getUser(
    params: getUserParams,
    options:? FetchOptions
): Promise<UserEntity> {
    return request(`/user`, params, "GET", options);
}

type getUsersParams = {
    since: string,
}

export function getUsers(
    params: getUsersParams,
    options:? FetchOptions
): Promise<Array<UserEntity>> {
    return request(`/users`, params, "GET", options);
}

type getRepositoriesByUsernameParams = {
    type?: "all" | "owner" | "member",
    sort?: "created" | "updated" | "pushed" | "full_name",
    direction?: "asc" | "desc",
    page?: number,
    per_page?: number,
}

export function getRepositoriesByUsername(
    username: string = required("username"),
    params: getRepositoriesByUsernameParams,
    options:? FetchOptions
): Promise<Array<UserEntity>> {
    return request(`/users/${username}/repos`, params, "GET", options);
}

type getOrganizationsByUsernameParams = {
}

export function getOrganizationsByUsername(
    username: string = required("username"),
    params: getOrganizationsByUsernameParams,
    options:? FetchOptions
): Promise<Array<OrganizationEntity>> {
    return request(`/users/${username}/orgs`, params, "GET", options);
}
