var ws = require('websocket-stream');
var s = ws('ws://localhost:8000');

s.end("hello\n");