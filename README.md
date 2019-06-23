# clockify-npm
Rest Client for Clockify https://clockify.me

Npm https://www.npmjs.com/package/clockify-npm


###Examples
```
const Clockify = require('clockify-npm');

Clockify.SetKey('YOUR_API_KEY');

Clockify.Workspaces.get()
    .then((data) => {
        console.log(data)
    }).catch(function(err){
        console.error(err);
    })

Clockify.Workspaces.add('My Work Space')
    .then((data) => {
        console.log(data)
    }).catch(function(err){
        console.error(err);
    })
```