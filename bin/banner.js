#!/usr/bin/env node
var fs = require('fs');
    sys = require('sys'),
    path = require('path'),
    spawn = require('child_process').spawn,
    argv = process.argv.slice(2, process.argv.length);

if (argv.length<2) return sys.error('usage:\n\tbanner package.json header.js');

var package = JSON.parse(fs.readFileSync(argv[0], 'utf-8')),
    git = spawn('git', ['--git-dir', path.join(process.cwd(), '.git'), 'show']);
    version = package.version,
    name = package.name,
    width = name.length + version.length,
    commit = '';


git.stdout.on('data', function(d) {
    commit = ' - ' + d.toString().split(/\s/)[1].substr(0,10);
});

git.on('exit', function() {
    fs.writeFileSync(argv[1],
        '/* ' + name + ' - ' + version + commit + ' */',
        'utf-8');
});
