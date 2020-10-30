const assert = require('assert');
const Clockify = require('./app.js');
const expect = require('expect.js');

it('Clockify.Workspaces.get() Should return an array of Workspaces', (done) => {
    Clockify.SetKey(process.env.CLOCKIFY_API_KEY);
    const resolvingPromise = Clockify.Workspaces.get();
    resolvingPromise.then( (result) => {
        expect(result).to.be.an('array');
        done();
    });
})
