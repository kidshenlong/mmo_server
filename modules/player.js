/**
 * Created by Michael on 13/05/15.
 */
var uuid = require('node-uuid');

function player(client_id){
    this.owner_id = client_id;
    this.id = uuid.v4();
    this.hp = 100;
    this.level = 1;
    this.position = { x: 0, y: 0};
    this.deathCount = 0;

}

/*Object.defineProperty(player.prototype, 'hp', {
    set: function(hp) {
        this._hp = hp;
        if (this._hp <= 0) {
            this._hp = 100;
            this.deathCount++;
        }
    },
    get: function() {
        return this._hp;
    }
});*/

Object.defineProperty(player.prototype, 'owner_id', {
    writable: false
});

module.exports = player;