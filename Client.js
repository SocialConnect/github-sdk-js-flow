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

export function required(key: string) {
    throw new Error(`Missing required parameter: ${key}`);
}

export function request(url: string, params: Object, method: string = 'GET', options:? FetchOptions) {
    return new Promise(
        (resolve, reject) => {
            let requestOptions = Object.assign({}, options, { method: method});

            if (method == 'POST' || method == 'PUT') {
                if (requestOptions.headers) {
                    requestOptions.headers = Object.assign(
                        requestOptions.headers,
                        {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    );
                } else {
                    requestOptions.headers = {
                        "Content-Type": "application/x-www-form-urlencoded"
                    };
                }

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
