#!/usr/bin/env node

const package = require('../package');
const program = require('commander');

function run(cmd, env) {
    if (cmd === undefined) {
        console.error('no command given!');
        process.exit(1);
    }

    if (env === undefined) {
        console.error('no command given!');
        process.exit(1);
    }

    console.log(getCommand(cmd, env));
}

function getCommand(cmd, env) {
    let command;
    switch(cmd) {
        case 'deploy':
            command = getDeployCommand(env);
            break;
        default:
            console.log(`Unknown command: ${cmd}`);
            process.exit(1);
    }
    return command;
}

function getDeployCommand(env) {

    return `aws cloudformation package `;
}

function getProjectName() {
    return package.name;
}

function getUsage() {
    console.log(
        '\n  Examples: \n\n' +
        '    $ lambda-build deploy dev\n' +
        '    $ lambda-build delete test\n'
    );
}

function pp(obj) {
    return JSON.stringify(obj, null, 2);
}

program
    .alias('lambda-build')
    .version('0.1.0')
    .arguments('<cmd> [env]')
    .action(run)
    .on('--help', getUsage)
    .parse(process.argv);
