const {writeFileSync} = require('fs');

const data = {
    temperature: 30,
    voltage: 4.5,
};

writeFileSync('../data/telemetry.json', JSON.stringify(data),{flag:'a'});
