# <img src="https://socialconnect.github.io/assets/icons/mark-github.svg" width="27"> GitHub SDK Flow + Fetch

This project is an auto generated SDK client for GitHub powered by 
[SocialConnect/swagger-codegen](https://github.com/SocialConnect/swagger-codegen) on Swagger Spec

# Installation

```bash
npm install github-flow-js --save
```

Example, get user by id:

```javascript
// @flow

import { getUserById } from 'github-flow-js';

const request = getUserById({
    id: "ovr"              
});

request.then(
    (user) => console.log(user),
    (e) => console.warn(e)
);
```

# LICENSE

MIT
