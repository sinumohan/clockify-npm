var assert = require('assert');
var Clockify = require('./app.js');
var expect = require('expect.js');
const fs = require('fs');
var Key = fs.readFileSync('./clockify.key');
it('Clockify.Workspaces.get() Should return an array of Workspaces', (done) => {
    Clockify.SetKey(Key);
    const resolvingPromise = Clockify.Workspaces.get();
    resolvingPromise.then( (result) => {
        expect(result).to.be.an('array');
        done();
    });
})