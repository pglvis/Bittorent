'use strict'

const dgram = require('dgram');
const Buffer = require('buffer').Buffer;
const urlParse = require('url').parse;

module.exports.getPeers = (torrent , callback) => {
    const socket = dgram.createSocket('udp4');
    const url = torrent.announce.toString('utf8');

    // 1: Send connect request
    udpSend(socket , buildConnReq() , url);

    socket.on('message' , response => {
        if(respType(response) === 'connect'){
            // 2: Recieves and parse connect response
            const connResp = parseConnResp(response);
            // 3: send announce request
            const announceReq = buidlAnnounceReq(connResp.connectionId);
            udpSend(socket, announceReq, url);
        }
        else if(respType(response) === 'announce'){
            // 4: Parse announce response
            const announceResp = parseAnnounceResp(response);
            // 5: Pass peers to callback
            callback(announceResp.peers);
        }
    });
};