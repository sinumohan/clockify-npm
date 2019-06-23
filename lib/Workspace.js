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
        return Api.makeServerRequest('GET', `/workspace/${ workspaceId }/users`);
    else Promise.reject("workspaceId required");
}

const getAllClients = (workspaceId) => {
    if( workspaceId && workspaceId !== "")
        return Api.makeServerRequest('GET', `/workspace/${ workspaceId }/clients`);
    else Promise.reject("workspaceId required");
}

const addClient = (workspaceId, name) => {
    if( workspaceId && workspaceId !== "")
        return Api.makeServerRequest('POST', `/workspaces/${ workspaceId }/clients`,{ "name": name });
    else Promise.reject("Workspace name required");
}
module.exports = {
    get,
    add,
    getAllUsers,
    getAllClients
}