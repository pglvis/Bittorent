'use strict'
const fs = require('fs');
const bencode = require('bencode');
const tracker = require('./tracker');
const torrentParser = require('./torrent-parser');

const torrent = bencode.decode(fs.readFileSync('puppy.torrent'));

tracker.getPeers(torrent , peers => {
    console.log('list of peers: ' , peers);
});

