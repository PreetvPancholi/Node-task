const {writeFileSync} = require('fs');

const data = {
    temperature: 24,
    voltage: 3.7,
};

writeFileSync('../data/telemetry.json', JSON.stringify(data));
