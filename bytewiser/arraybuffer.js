var ua32 = new Uint32Array(1);
ua32[0] = Number(process.argv[2]);
var ua16 = new Uint16Array(ua32.buffer);
console.log(JSON.stringify(ua16));