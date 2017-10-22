// @flow

import { request, required } from './Client'

// flow types
import type { FetchOptions } from './Client';

type deleteReactionParams = {
}

export function deleteReaction(
    id: string = required("id"),
    params: deleteReactionParams,
    options?: FetchOptions
): Promise<any> {
    return request(`/reactions/${id}`, params, "DELETE", options);
}
