#!/usr/bin/env node
var fs = require('fs'),
    util = require('util'),
    path = require('path'),
    spawn = require('child_process').spawn,
    argv = process.argv.slice(2, process.argv.length);

if (argv.length !== 1) return util.error('usage:\n\tbanner package.json > header.js');

var p = JSON.parse(fs.readFileSync(argv[0], 'utf-8')),
    git = spawn('git', ['describe']),
    version = p.version,
    name = p.name,
    width = name.length + version.length,
    commit = '';

git.stdout.on('data', function(d) {
    commit = ' - ' + d.toString().trim();
});

git.on('exit', function() {
    console.log('/* ' + name + ' - ' + version + commit + ' */\n\n');
});
