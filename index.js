const core = require('@actions/core');

core.info(`object key - a`);
core.info(`object locations - b`);
core.setOutput('object_key', 'c');

console.log('ggg');