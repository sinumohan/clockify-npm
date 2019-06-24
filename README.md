# clockify-npm

> A wraper for [Clockify](https://clockify.me) REST APIs. 
> For API docs Please refer [developers-api](https://clockify.me/developers-api). 

> [NPM Package](https://www.npmjs.com/package/clockify-npm).

### Installation
``` npm install clockify-npm ```

### Examples
```
const Clockify = require('clockify-npm');

Clockify.SetKey('YOUR_API_KEY');

Clockify.Workspaces.get()
    .then((data) => {
        console.log(data)
    }).catch((err) => {
        console.error(err);
    })

Clockify.Workspaces.add('My Work Space')
    .then((data) => {
        console.log(data)
    }).catch((err) => {
        console.error(err);
    })
```

[![CircleCI](https://circleci.com/gh/sinumohan/clockify-npm/tree/master.svg?style=svg)](https://circleci.com/gh/sinumohan/clockify-npm/tree/master)
