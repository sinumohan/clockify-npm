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
    if( workspaceId && workspaceId !== "" && name && name !== "" )
        return Api.makeServerRequest('POST', `/workspaces/${ workspaceId }/clients`,{ "name": name });
    else Promise.reject("Workspace id & client name required");
}

const getProjects = (workspaceId) => {
    if( workspaceId && workspaceId !== "")
        return Api.makeServerRequest('GET', `/workspaces/${ workspaceId }/projects`);
    else Promise.reject("Workspace id required");
}

const addProject = (workspaceId, options) => {
    if( workspaceId && workspaceId !== "")
        return Api.makeServerRequest('POST', `/workspaces/${ workspaceId }/projects`,options);
    else Promise.reject("Workspace id required");
}

const deleteProject = (workspaceId, projectId) => {
    if( workspaceId && workspaceId !== "" && projectId && projectId !== "")
        return Api.makeServerRequest('POST', `/workspaces/${ workspaceId }/projects/${ projectId }`);
    else Promise.reject("Workspace id && projectId required");
}

const addTag = (workspaceId, name) => {
    if( workspaceId && workspaceId !== "" && name && name !== "" )
        return Api.makeServerRequest('POST', `/workspaces/${ workspaceId }/tags`,,{ "name": name });
    else Promise.reject("Workspace id && name required");
}

const findTasksOnProject = (workspaceId, projectId) => {
    if( workspaceId && workspaceId !== "" && projectId && projectId !== "")
        return Api.makeServerRequest('GET', `/workspaces/${ workspaceId }/projects/${ projectId }/tasks`);
    else Promise.reject("Workspace id && projectId required");
}

const addTimeEntry = (workspaceId, options) => {
    if( workspaceId && workspaceId !== "" && options)
        return Api.makeServerRequest('POST', `/workspaces/${ workspaceId }/time-entries`, options);
    else Promise.reject("Workspace id, options required");
}

const getTimeEntry = (workspaceId, timeEntryId) => {
    if( workspaceId && workspaceId !== "" && timeEntryId)
        return Api.makeServerRequest('GET', `/workspaces/${ workspaceId }/time-entries/${ timeEntryId }`);
    else Promise.reject("Workspace id, timeEntryId required");
}

const updateTimeEntry = (workspaceId, timeEntryId, options) => {
    if( workspaceId && workspaceId !== "" && timeEntryId)
        return Api.makeServerRequest('PUT', `/workspaces/${ workspaceId }/time-entries/${ timeEntryId }`, options);
    else Promise.reject("Workspace id, timeEntryId required");
}

module.exports = {
    get,
    add,
    getAllUsers,
    getAllClients,
    addClient,
    getProjects,
    addProject,
    deleteProject,
    addTag,
    findTasksOnProject,
    addTasksOnProject,
    addTimeEntry,
    getTimeEntry,
    updateTimeEntry
}