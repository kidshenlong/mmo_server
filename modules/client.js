/**
 * Created by Michael on 16/05/15.
 */
var uuid = require('node-uuid');

function client (socket) {
    this._uuid = uuid.v4();
}

Object.defineProperty(client.prototype, 'id', {
    get: function() {
        return this._uuid;
    }
});

module.exports = client;