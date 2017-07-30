// @flow

import { executeQL, required } from './Client'

// flow types
import type { FetchOptions } from './Client';

type executeGraphQLParams = {
    query: string,
}

export function executeGraphQL(
    query: string = required('query'),
    variables: Object
): Promise<any> {
    return executeQL(query, variables, {});
}
