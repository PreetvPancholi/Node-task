const {readFileSync} = require('fs');

const data = readFileSync('../data/telemetry.json');

console.log(JSON.parse(data))