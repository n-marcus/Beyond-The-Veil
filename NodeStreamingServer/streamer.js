//Adress to receive stream will be something like: 
// rtmp://localhost:1935/live/stream

const NodeMediaServer = require('node-media-server');

const port = 1935;

const config = {
    rtmp: {
        port: port,
        chunk_size: 1000,
        gop_cache: true,
        ping: 30,
        ping_timeout: 60
    },
    http: {
        port: 8000,
        allow_origin: '*'
    }
};

const nms = new NodeMediaServer(config);

console.log("Stream server is starting...");
console.log("rtmp://localhost:" + port + "/live/stream");

nms.run();

 