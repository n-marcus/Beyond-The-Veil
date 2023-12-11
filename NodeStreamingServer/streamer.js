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

nms.run();
console.log("Stream server has started!");
console.log("Get acces using url:");
console.log("rtmp://localhost:" + port + "/live/stream");

 