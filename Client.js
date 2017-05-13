// @flow

const API_BASE_PATH: string = "https://api.github.com";

export type FetchOptions = {
    headers:? Object
};

function buildQueryString(params: Object): string {
    return Object.keys(params)
        .filter(v => v !== null)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&');
}

function required(key: string) {
    throw new Error(`Missing required parameter: ${key}`);
}

function makeClient() {
    let before = [];
    let after = [];

    return {
        before: (midlleware) => {
            before.push(midlleware);
        },
        request: (url: string, params: Object, method: string = 'GET', options:? FetchOptions) => {
            let requestOptions = Object.assign({}, options, { method: method });

            if (before) {
                before.forEach((middleware) => middleware(requestOptions));
            }

            return new Promise(
                (resolve, reject) => {
                    if (method == 'POST' || method == 'PUT') {
                        requestOptions = Object.assign(
                            requestOptions,
                            {
                                body: JSON.stringify(params)
                            }
                        )
                    } else if (params && Object.keys(params).length > 0) { // Check that parameters exists
                        url += '?' + buildQueryString(params)
                    }

                    fetch(API_BASE_PATH + url, requestOptions).then(
                        (response) => {
                            if (response.status >= 200 && response.status < 300) {
                                resolve(response.json());
                            } else {
                                reject(response);
                            }
                        },
                        (err) => reject(err)
                    )
                }
            )
        }
    }
}

const defaultClient = makeClient();
const before = defaultClient.before;
const request = defaultClient.request;

export {
    required,
    makeClient,
    before,
    request
}
