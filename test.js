var assert = require('assert');
var Clockify = require('./app.js');
var expect = require('expect.js');

it('Clockify.Workspaces.get() Should return an array of Workspaces', (done) => {
    Clockify.SetKey(process.env.CLOCKIFY_API_KEY);
    const resolvingPromise = Clockify.Workspaces.get();
    resolvingPromise.then( (result) => {
        expect(result).to.be.an('array');
        done();
    });
})