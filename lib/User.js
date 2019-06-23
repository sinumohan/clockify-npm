const Api = require('../request-interface');

const get = () => {
    return Api.makeServerRequest('GET', '/user');
}

module.exports = {
    get
}