const Api = require('../request-interface');

const get = () => {
    return Api.makeServerRequest('GET', '/workspaces');
}

const add = (name) => {
    if( name && name !== "")
        return Api.makeServerRequest('POST', '/workspaces',{ "name": name });
    else Promise.reject("Workspace name required");
}

const getAllUsers = (workspaceId) => {
    if( workspaceId && workspaceId !== "")
        return Api.makeServerRequest('POST', `/workspace/${ workspaceId }/users`,{ "name": name });
    else Promise.reject("workspaceId required");
}

module.exports = {
    get,
    add,
    getAllUsers
}