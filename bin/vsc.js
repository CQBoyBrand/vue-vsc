#!/usr/bin/env node
var gs = require('../lib/generate'),
    program = require('commander');
program
    .version(require('../package.json').version)
    .usage('[options] [project name]')
    .parse(process.argv);
var pname = program.args[0];
if (!pname) program.help();
gs(pname);
