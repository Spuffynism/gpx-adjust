#!/usr/bin/env node
const pipeline = [
    require('./checkForFileNamePresence'),
    require('./discoverFileNameIfNotExplicit'),
    require('./adjustFileTimeZone')
];

const fileName = process.argv[2];

try {
    pipeline.reduce((previousResult, fn) => fn(previousResult), fileName)
} catch (e) {
    console.error(`Error: ${e.message}`);
}
