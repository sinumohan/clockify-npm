const Api = require('./request-interface');
const Workspaces = require('./lib/Workspace');
const User = require('./lib/User');
let API_BASE_END_POINT= 'https://api.clockify.me/api/v1';

const SetKey = (KEY) => {
    Api.SetKey(KEY);
}

module.exports = {
    SetKey,
    Workspaces,
    User
};
