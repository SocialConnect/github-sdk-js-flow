// @flow

import { request, required } from './Client'

// flow types
import type { FetchOptions } from './Client';
import type {
    PushEvent,
    PullRequestEvent,
} from './definitions';

type getEventsParams = {
    page?: number,
    per_page?: number,
}

export function getEvents(
    params: getEventsParams,
    options?: FetchOptions
): Promise<Array<PushEvent|PullRequestEvent>> {
    return request(`/events`, params, "GET", options);
}
