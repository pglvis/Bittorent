'use strict'

const crypto = require('crypto');

let id = null;

module.exports.genId = () => {
    if(!id){
        // To generate a new id for me
        // peer id of random 20 byte string . AT is name of client and 0001 is version number.
        id = crypto.randomBytes(20);
        Buffer.from('-AT0001-').copy(id , 0);
    }
    return id;
};