// keeping all the code related to getting information out of a torrent file
'use strict';

const fs = require('fs');
const bencode = require('bencode');

module.exports.open = (filepath) => {
    return bencode.decode(fs.readFileSync(filepath));
};

module.exports.size = torrent => {

};

module.exports.infoHash = torrent => {

};